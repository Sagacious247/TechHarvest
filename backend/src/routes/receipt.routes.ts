import { Router } from "express";

import asyncHandler from "../middlewares/asyncHandler";

import { studentAuthenticate } from "../middlewares/studentAuthenticate";
import { authenticate } from "../middlewares/authenticate";
import { authorize } from "../middlewares/authorize";

import {
  getMyReceiptsController,
  getReceiptController,
  getAllReceiptsController,
} from "../controllers/receipt.controller";

const router = Router();

/**
 * ==========================================
 * Student Routes
 * ==========================================
 */

router.get(
  "/me",
  studentAuthenticate,
  asyncHandler(getMyReceiptsController)
);

router.get(
  "/:id",
  studentAuthenticate,
  asyncHandler(getReceiptController)
);

/**
 * ==========================================
 * Admin Routes
 * ==========================================
 */

router.get(
  "/",
  authenticate,
  authorize("super_admin"),
  asyncHandler(getAllReceiptsController)
);

export default router;