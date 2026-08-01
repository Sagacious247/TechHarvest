import { Router } from "express";

import asyncHandler from "../middlewares/asyncHandler";
import validate from "../middlewares/validate";

import {
  authenticate,
} from "../middlewares/authenticate";

import {
  authorize,
} from "../middlewares/authorize";

import {
  createLessonController,
  getLessonsController,
   getLessonController,
  updateLessonController,
  deleteLessonController,
  publishLessonController,
} from "../controllers/lesson.controller";

import {
  createLessonSchema,
} from "../validators/lesson.validator";

const router = Router();

router.post(
  "/",
  authenticate,
  authorize("super_admin", "admin"),
  validate(createLessonSchema),
  asyncHandler(createLessonController)
);

router.get(
  "/module/:moduleId",
  asyncHandler(getLessonsController)
);

router.get(
  "/:lessonId",
  asyncHandler(getLessonController)
);

router.put(
  "/:lessonId",
  authenticate,
  authorize("super_admin", "admin"),
  validate(createLessonSchema),
  asyncHandler(updateLessonController)
);

router.delete(
  "/:lessonId",
  authenticate,
  authorize("super_admin", "admin"),
  asyncHandler(deleteLessonController)
);

router.patch(
  "/:lessonId/publish",
  authenticate,
  authorize("super_admin", "admin"),
  asyncHandler(publishLessonController)
);

export default router;
