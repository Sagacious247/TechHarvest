import { Request, Response } from "express";

import {
  initializePayment,
  verifyPayment,
} from "../services/payment.service";

/**
 * Initialize Payment
 */

export const initializePaymentController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const { enrollmentId } = req.body;

  const user = req.user;

  if (!user) {
    throw new Error("Unauthorized.");
  }

  if (!enrollmentId) {

    res.status(400).json({
      success: false,
      message: "Enrollment ID is required.",
    });

    return;

  }

  const result = await initializePayment(
    enrollmentId,
    user.id
  );

  res.status(200).json({

    success: true,

    message: result.message,

    data: result,

  });

};

/**
 * Manual Verification
 */
export const verifyPaymentController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const reference = Array.isArray(req.params.reference)
  ? req.params.reference[0]
  : req.params.reference;

const result = await verifyPayment(reference);

  res.status(200).json({

    success: true,

    message:
      result.message,

    data: result,

  });

};

/**
 * Paystack Webhook
 */
export const paystackWebhookController = async (
  req: Request,
  res: Response
): Promise<void> => {

  try {

    const event =
      JSON.parse(req.body.toString());

    if (
      event.event === "charge.success"
    ) {

      const reference =
        event.data.reference;

      await verifyPayment(reference);

      console.log(
        `✅ Payment verified: ${reference}`
      );

    }

    res.sendStatus(200);

  } catch (error) {

    console.error(
      "Webhook Error:",
      error
    );

    res.sendStatus(500);

  }

};
