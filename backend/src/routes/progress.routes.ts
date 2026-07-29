import { Router } from "express";

import asyncHandler from "../middlewares/asyncHandler";
import validate from "../middlewares/validate";

import {
  studentAuthenticate,
} from "../middlewares/studentAuthenticate";

import {
  completeLessonController,
  getProgressController,
  updateVideoProgressController,
} from "../controllers/progress.controller";

import {
  updateProgressSchema,
} from "./../validators/progress.validator";

const router = Router();

/**
 * Save Video Progress
 */
router.post(
  "/update",
  studentAuthenticate,
  validate(updateProgressSchema),
  asyncHandler(updateVideoProgressController)
);

/**
 * Mark lesson completed
 */
router.post(
  "/lesson/:lessonId/complete",
  studentAuthenticate,
  asyncHandler(completeLessonController)
);

/**
 * Get module progress
 */
router.get(
  "/module/:moduleId",
  studentAuthenticate,
  asyncHandler(getProgressController)
);

export default router;