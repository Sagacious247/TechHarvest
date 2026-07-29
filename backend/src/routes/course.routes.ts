import express from "express";

import validate from "../middlewares/validate";

import {
  createCourseController,
  getCoursesController,
  getCourseController,
  publishCourseController,
} from "../controllers/course.controller";

import {
  authenticate,
} from "../middlewares/authenticate";
import {
  authorize,
} from "../middlewares/authorize";
import {
  createCourseSchema,
} from "../validators/course.validator";

const router = express.Router();

/**
 * Create Course
 */
router.post(
  "/",
  authenticate,
  authorize("super_admin"),
  validate(createCourseSchema),
  createCourseController
);

/**
 * Get All Courses
 */
router.get(
  "/",
  getCoursesController
);

/**
 * Publish Course
 */
router.patch(
  "/:id/publish",
  authenticate,
  authorize("super_admin"),
  publishCourseController
);

/**
 * Get Single Course
 */
router.get(
  "/:id",
  getCourseController
);

export default router;