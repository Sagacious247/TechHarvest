import axios from "axios";
import Payment from "../models/payment.model";
import Enrollment from "../models/enrollment.model";
import env from "../config/env";
import { generateReference } from "../utils/generateReference";
import {
  PAYMENT_STATUS,
  PAYMENT_GATEWAY,
} from "../constants/payment";

/**
 * Initialize Paystack Payment
 */
export const initializePayment = async (
  enrollmentId: string
) => {
  // Find enrollment
  const enrollment = await Enrollment.findById(enrollmentId)
    .populate("student");

  if (!enrollment) {
    throw new Error("Enrollment not found.");
  }

  const student: any = enrollment.student;

  if (!student) {
    throw new Error("Student not found.");
  }

  const reference = generateReference();

  // Initialize Paystack
  const response = await axios.post(
    "https://api.paystack.co/transaction/initialize",
    {
      email: student.email,
      amount: enrollment.amount * 100,
      currency: "NGN",
      reference,
    },
    {
      headers: {
        Authorization: `Bearer ${env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  // Save pending payment
  const payment = await Payment.create({
    enrollment: enrollment._id,
    email: student.email,
    amount: enrollment.amount,
    reference,
    status: PAYMENT_STATUS.PENDING,
    gateway: PAYMENT_GATEWAY.PAYSTACK,
  });

  return {
    payment,
    authorization_url:
      response.data.data.authorization_url,
    reference,
  };
};

/**
 * Verify Payment
 */
export const verifyPayment = async (
  reference: string
) => {

  const response = await axios.get(
    `https://api.paystack.co/transaction/verify/${reference}`,
    {
      headers: {
        Authorization: `Bearer ${env.PAYSTACK_SECRET_KEY}`,
      },
    }
  );

  const paystack = response.data.data;

  const payment = await Payment.findOne({
    reference,
  });

  if (!payment) {
    throw new Error("Payment record not found.");
  }

  if (paystack.status === "success") {

    payment.status = PAYMENT_STATUS.SUCCESS;
    payment.paidAt = new Date();

    await payment.save();

    await Enrollment.findByIdAndUpdate(
      payment.enrollment,
      {
        paymentStatus: "paid",
        status: "active",
        enrolledAt: new Date(),
      }
    );
  }

  return paystack;
};