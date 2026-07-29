import { Router } from "express";

import asyncHandler from "../middlewares/asyncHandler";
import { studentAuthenticate } from "../middlewares/studentAuthenticate";

import {
  getCourseContentController,
} from "../controllers/courseContent.controller";

const router = Router();

router.get(
  "/:courseId/content",
  studentAuthenticate,
  asyncHandler(getCourseContentController)
);

export default router;