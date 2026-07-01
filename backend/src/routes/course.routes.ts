import express from "express";

import {
  createCourseController,
  getCoursesController,
} from "../controllers/course.controller";

import {
  authenticate,
} from "../middlewares/authenticate";

import {
  authorize,
} from "../middlewares/authorize";

const router = express.Router();

/**
 * Create Course
 */
router.post(
  "/",
  authenticate,
  authorize("super_admin", "admin"),
  createCourseController
);

/**
 * Get All Courses
 */
router.get(
  "/",
  getCoursesController
);

export default router;
