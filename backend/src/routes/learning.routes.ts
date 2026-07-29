import { Router } from "express";

import asyncHandler from "../middlewares/asyncHandler";
import { studentAuthenticate } from "../middlewares/studentAuthenticate";

import {
  getLearningCourseController,
} from "../controllers/learning.controller";

const router = Router();

router.get(
  "/:courseId",
  studentAuthenticate,
  asyncHandler(getLearningCourseController)
);

export default router;