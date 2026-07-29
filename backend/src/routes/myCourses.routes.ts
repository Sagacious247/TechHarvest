import { Router } from "express";

import asyncHandler from "../middlewares/asyncHandler";

import {
  studentAuthenticate,
} from "../middlewares/studentAuthenticate";

import {
  getMyCoursesController,
} from "../controllers/myCourses.controller";

const router = Router();

router.get(
  "/",
  studentAuthenticate,
  asyncHandler(getMyCoursesController)
);

export default router;
