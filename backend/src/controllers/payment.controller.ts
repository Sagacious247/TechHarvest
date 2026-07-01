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
  try {
    const { enrollmentId } = req.body;

    if (!enrollmentId) {
      res.status(400).json({
        success: false,
        message: "Enrollment ID is required.",
      });
      return;
    }

    const result = await initializePayment(enrollmentId);

    res.status(200).json({
      success: true,
      message: "Payment initialized successfully.",
      data: result,
    });

  } catch (error: any) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        error.message || "Unable to initialize payment.",
    });
  }
};

/**
 * Manual Verification
 * Useful during development/testing
 */
export const verifyPaymentController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { reference } = req.params;

    const result = await verifyPayment(reference);

    res.status(200).json({
      success: true,
      message: "Payment verified successfully.",
      data: result,
    });

  } catch (error: any) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        error.message || "Verification failed.",
    });
  }
};

/**
 * Paystack Webhook
 */
export const paystackWebhookController = async (
  req: Request,
  res: Response
): Promise<void> => {

  try {

    const event = JSON.parse(req.body.toString());

    if (
      event.event === "charge.success"
    ) {

      const reference =
        event.data.reference;

      await verifyPayment(reference);

      console.log(
        "✅ Payment verified through webhook:",
        reference
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
