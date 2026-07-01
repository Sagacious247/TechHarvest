import express from "express";
import {
  initializePaymentController,
  verifyPaymentController,
  paystackWebhookController,
} from "../controllers/payment.controller";

import { verifyPaystackSignature } from "../middlewares/verifyPaystackSignature";

const router = express.Router();

/**
 * Initialize Payment
 */
router.post(
  "/initialize",
  initializePaymentController
);

/**
 * Verify Payment (Manual)
 */
router.get(
  "/verify/:reference",
  verifyPaymentController
);

/**
 * Paystack Webhook
 */
router.post(
  "/webhook",
  verifyPaystackSignature,
  paystackWebhookController
);

export default router;