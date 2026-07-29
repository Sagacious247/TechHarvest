import { Router } from "express";

import asyncHandler from "../middlewares/asyncHandler";

import {
  studentAuthenticate,
} from "../middlewares/studentAuthenticate";

import {
  resumeLearningController,
} from "../controllers/resume.controller";

const router = Router();

router.get(
  "/",
  studentAuthenticate,
  asyncHandler(resumeLearningController)
);

export default router;
