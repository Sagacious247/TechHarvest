import { Router } from "express";

import asyncHandler from "../middlewares/asyncHandler";

import { authenticate } from "../middlewares/authenticate";

import { authorize } from "../middlewares/authorize";

import {
  getSettingsController,
  updateSettingsController,
} from "../controllers/setting.controller";

const router = Router();

router.get(
  "/",
  authenticate,
  authorize("super_admin", "admin"),
  asyncHandler(getSettingsController)
);

router.put(
  "/",
  authenticate,
  authorize("super_admin"),
  asyncHandler(updateSettingsController)
);

export default router;