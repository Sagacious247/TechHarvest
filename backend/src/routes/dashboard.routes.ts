import { Router } from "express";

import asyncHandler from "../middlewares/asyncHandler";

import {
  studentAuthenticate,
} from "../middlewares/studentAuthenticate";

import {
  getStudentDashboardController,
} from "../controllers/dashboard.controller";

const router = Router();

router.get(
  "/",
  studentAuthenticate,
  asyncHandler(getStudentDashboardController)
);

export default router;
