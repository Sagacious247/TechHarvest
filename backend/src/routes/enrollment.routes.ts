import { Router } from "express";

import asyncHandler from "../middlewares/asyncHandler";

import {
  studentAuthenticate,
} from "../middlewares/studentAuthenticate";

import {
  createEnrollmentController,
  getStudentEnrollmentsController,
} from "../controllers/enrollment.controller";

const router = Router();

/**
 * Get Student Enrollments
 */
/**
 * Get My Enrollments
 */
router.get(
  "/me",
  studentAuthenticate,
  asyncHandler(
    getStudentEnrollmentsController
  )
);

/**
 * Create Enrollment
 */
router.post(
  "/",
  studentAuthenticate,
  asyncHandler(
    createEnrollmentController
  )
);

export default router;