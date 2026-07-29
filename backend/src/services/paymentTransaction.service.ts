import mongoose from "mongoose";

import Payment from "../models/payment.model";
import Enrollment from "../models/enrollment.model";
import { PAYMENT_STATUS } from "../constants/payment";

import AppError from "../utils/AppError";

export const completePaymentTransaction = async (
  paymentId: string
) => {

  const session =
    await mongoose.startSession();

  session.startTransaction();

  try {

    /**
     * Load payment
     */
    const payment =
      await Payment.findById(paymentId)
        .session(session);

    if (!payment) {
      throw new AppError(
        "Payment not found.",
        404
      );
    }

    /**
     * Load enrollment
     */
    const enrollment =
      await Enrollment.findById(
        payment.enrollment
      ).session(session);

    if (!enrollment) {
      throw new AppError(
        "Enrollment not found.",
        404
      );
    }

    /**
     * Prevent duplicate activation
     */
    if (
      payment.status === "success" &&
      enrollment.status === "active"
    ) {

      await session.commitTransaction();

      session.endSession();

      return {
        payment,
        enrollment,
      };

    }

    /**
     * Update payment
     */
    payment.status = PAYMENT_STATUS.SUCCESS;
    payment.processing = false;
    payment.paidAt = new Date();

    await payment.save({
      session,
    });

    /**
     * Activate enrollment
     */
    enrollment.status = "active";
    enrollment.enrolledAt = new Date();

    await enrollment.save({
      session,
    });

    /**
     * Commit
     */
    await session.commitTransaction();

    session.endSession();

    return {
      payment,
      enrollment,
    };

  } catch (error) {

    await session.abortTransaction();

    session.endSession();

    throw error;

  }

};