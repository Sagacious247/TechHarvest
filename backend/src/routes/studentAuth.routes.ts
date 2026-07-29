import { Router } from "express";

import asyncHandler from "../middlewares/asyncHandler";
import validate from "../middlewares/validate";

import { loginStudentController } from "../controllers/studentAuth.controller";

import { loginStudentSchema } from "../validators/studentAuth.validator";

import { studentAuthenticate } from "../middlewares/studentAuthenticate";

import { getStudentProfile, updateProfile } from "../controllers/studentProfile.controller";

import { getStudentDashboardController } from "../controllers/dashboard.controller";

import { authLimiter } from "../middlewares/rateLimiter";
import {
  changePasswordController,
} from "../controllers/studentSettings.controller";

import { changePasswordSchema } from "../validators/studentSettings.validator";

const router = Router();

router.post(
  "/login",
  authLimiter,
  validate(loginStudentSchema),
  asyncHandler(loginStudentController)
);

router.get(
  "/profile",
  studentAuthenticate,
  asyncHandler(getStudentProfile)
);

router.get(
  "/dashboard",
  studentAuthenticate,
  asyncHandler(getStudentDashboardController)
);

router.put(
  "/profile",
  studentAuthenticate,
  asyncHandler(updateProfile)
);

router.put(
  "/change-password",
  studentAuthenticate,
  validate(changePasswordSchema),
  asyncHandler(changePasswordController)
);

export default router;