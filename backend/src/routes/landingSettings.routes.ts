import { Router } from "express";

import asyncHandler from "../middlewares/asyncHandler";
import { authenticate } from "../middlewares/authenticate";
import { authorize } from "../middlewares/authorize";

import {
  getLandingSettingsController,
  updateLandingSettingsController,
} from "../controllers/landingSettings.controller";

const router = Router();

/**
 * Public
 */

router.get(
  "/",
  asyncHandler(getLandingSettingsController)
);

/**
 * Admin
 */

router.patch(
  "/",
  authenticate,
  authorize("super_admin", "admin"),
  asyncHandler(updateLandingSettingsController)
);

export default router;