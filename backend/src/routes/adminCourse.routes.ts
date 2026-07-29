import { Router } from "express";

import { authenticate } from "../middlewares/authenticate";
import { authorize } from "../middlewares/authorize";

import {
  getAllCoursesController,
  getCourseController,
  createCourseController,
  updateCourseController,
  deleteCourseController,
  publishCourseController,
  featureCourseController
} from "../controllers/adminCourse.controller";

const router = Router();

/**
 * Protect every Course Route
 */
router.use(
  authenticate,
  authorize("super_admin", "admin")
);

/**
 * GET All Courses
 */
router.get(
  "/",
  getAllCoursesController
);

/**
 * GET Single Course
 */
router.get(
  "/:id",
  getCourseController
);

/**
 * CREATE Course
 */
router.post(
  "/",
  createCourseController
);

/**
 * UPDATE Course
 */
router.patch(
  "/:id",
  updateCourseController
);

/**
 * PUBLISH Course
 */
router.patch(
  "/:id/publish",
  publishCourseController
);

/**
 * FEATURE COURSE
 */
router.patch(
  "/:id/feature",
  featureCourseController
);

/**
 * DELETE Course
 */
router.delete(
  "/:id",
  deleteCourseController
);

export default router;
