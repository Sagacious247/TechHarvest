import axios from "axios";
import Payment from "../models/payment.model";
import Enrollment from "../models/enrollment.model";
import env from "../config/env";
import { generateReference } from "../utils/generateReference";
import { createReceipt } from "./receipt.service";
import { createNotification } from "./notification.service";
import Student from "../models/student.model";
import { sendStudentOnboardingEmails } from "./email/onboarding.service";
import {
  PAYMENT_STATUS,
  PAYMENT_GATEWAY,
} from "../constants/payment";
import {
  activateEnrollment,
} from "./enrollment.service";
import AppError from "../utils/AppError";

/**
 * Initialize Paystack Payment
 */
export const initializePayment = async (
  enrollmentId: string,
  studentId: string
) => {

  /**
   * Find Enrollment
   */
  const enrollment =
    await Enrollment.findById(
      enrollmentId
    ).populate("student");

  if (!enrollment) {
    throw new AppError(
      "Enrollment not found.",
      404
    );
  }

  /**
   * Ensure the logged-in student owns this enrollment
   */
  const student: any = enrollment.student;

  if (
    student._id.toString() !==
    studentId
  ) {
    throw new AppError(
      "Unauthorized payment attempt.",
      403
    );
  }

  /**
   * Check if payment is already successful
   */
  const completedPayment =
    await Payment.findOne({
      enrollment: enrollment._id,
      status: PAYMENT_STATUS.SUCCESS,
    });

  if (completedPayment) {

    return {

      payment: completedPayment,

      authorization_url: null,

      reference:
        completedPayment.reference,

      message:
        "This course has already been paid for.",

    };

  }

  /**
   * Check if there is a pending payment
   */
  /**
 * If a pending payment already exists,
 * remove it and create a fresh transaction.
 */
const pendingPayment =
  await Payment.findOne({
    enrollment: enrollment._id,
    status: PAYMENT_STATUS.PENDING,
  });

if (pendingPayment) {

  await Payment.findByIdAndDelete(
    pendingPayment._id
  );

}

  /**
   * Create New Payment
   */
  const reference =
    generateReference();

  const payment =
    await Payment.create({
      enrollment:
        enrollment._id,
      email:
        student.email,
      amount:
        enrollment.amount,
      reference,
      status:
        PAYMENT_STATUS.PENDING,
      processing: true,
      gateway:
        PAYMENT_GATEWAY.PAYSTACK,

    });

  try {

    const response =
      await axios.post(
        "https://api.paystack.co/transaction/initialize",
        {
          email: student.email,
          amount:
            enrollment.amount * 100,
          currency: "NGN",
          reference,
          callback_url:
         `${env.FRONTEND_URL}/payment/success?course=${enrollment.course}`,
          metadata: {
            enrollmentId:
              enrollment._id,
            studentId:
              student._id,
          },
        },
        {
          headers: {
            Authorization:
              `Bearer ${env.PAYSTACK_SECRET_KEY}`,
            "Content-Type":
              "application/json",
          },
        }
      );

    payment.processing = false;

    await payment.save();

    return {

      payment,

      authorization_url:
        response.data.data.authorization_url,

      reference,

      message:
        "Payment initialized successfully.",

    };

  } catch (error) {

    payment.processing = false;

    payment.status =
      PAYMENT_STATUS.FAILED;

    await payment.save();

    throw error;

  }

};

/**
 * Verify Paystack Payment
 */
export const verifyPayment = async (
  reference: string
) => {

  const payment =
    await Payment.findOne({
      reference,
    });

  if (!payment) {
    throw new AppError(
      "Payment record not found.",
      404
    );
  }

  /**
   * Already verified
   */
  if (
    payment.status ===
    PAYMENT_STATUS.SUCCESS
  ) {

    const enrollment =
      await Enrollment.findById(
        payment.enrollment
      );

    return {

      message:
        "Payment already verified.",

      payment,

      enrollment,

    };

  }

  /**
   * Verify with Paystack
   */
  const response =
    await axios.get(

      `https://api.paystack.co/transaction/verify/${reference}`,

      {

        headers: {

          Authorization:
            `Bearer ${env.PAYSTACK_SECRET_KEY}`,

        },

      }

    );

  const paystack =
    response.data.data;

  if (
    paystack.status !==
    "success"
  ) {

    payment.status =
      PAYMENT_STATUS.ABANDONED;

    await payment.save();

    throw new AppError(
      "Payment has not been completed.",
      400
    );

  }

  payment.status =
    PAYMENT_STATUS.SUCCESS;

  payment.processing = false;

  payment.paidAt =
    new Date();

  await payment.save();

  /**
   * Activate Enrollment
   */
const enrollment =
  await activateEnrollment(
    payment.enrollment.toString()
  );

  await enrollment.populate("course");

/**
 * Generate Receipt
 */
const receipt =
  await createReceipt(
    enrollment._id.toString(),
    payment.reference
  );

/**
 * Notify Student
 */
await createNotification(
  enrollment.student.toString(),
  "Payment Successful",
  "Your payment has been confirmed successfully. Your course is now available and your receipt has been generated.",
  "payment"
);

/**
 * Send onboarding emails
 */
const student = await Student.findById(
  enrollment.student
);

if (
  student &&
  !student.emailsSent
) {

  /**
   * TODO:
   * Replace this temporary password with the
   * actual generated password once we automate
   * student account creation.
   */
  const temporaryPassword =
    "ChangeMe123!";

  await sendStudentOnboardingEmails({

    name: student.fullName,

    email: student.email,

    password: temporaryPassword,

    receiptNumber: receipt.receiptNumber,

    amount: `₦${payment.amount.toLocaleString()}`,

    paymentDate: payment.paidAt
      ? payment.paidAt.toLocaleDateString()
      : new Date().toLocaleDateString(),

    course:
  (enrollment.course as any)?.title ??
  "TechHarvest AI Bootcamp",

    dashboardUrl: `${env.FRONTEND_URL}/student/dashboard`,

    whatsappLink:
      env.WHATSAPP_LINK || "",

    zoomLink:
      env.ZOOM_LINK || "",

    bootcampStartDate:
      env.BOOTCAMP_START_DATE ||
      "Coming Soon",

  });

  student.emailsSent = true;

  await student.save();

}

return {

  message:
    "Payment verified successfully.",

  payment,

  enrollment,

  receipt,
  paystack,

};

};