import express from "express";

import {
  initializePaymentController,
  verifyPaymentController,
  paystackWebhookController,
} from "../controllers/payment.controller";

import { studentAuthenticate } from "../middlewares/studentAuthenticate";

import { verifyPaystackSignature } from "../middlewares/verifyPaystackSignature";
import { paymentLimiter } from "../middlewares/rateLimiter";

const router = express.Router();

/**
 * Initialize Payment
 */
router.post(
  "/initialize",
  studentAuthenticate,
  paymentLimiter,
  initializePaymentController
);

/**
 * Verify Payment
 */
router.get(
  "/verify/:reference",
  studentAuthenticate,
  verifyPaymentController
);

/**
 * Paystack Webhook
 * (Must remain public)
 */
router.post(
  "/webhook",
  verifyPaystackSignature,
  paystackWebhookController
);

export default router;