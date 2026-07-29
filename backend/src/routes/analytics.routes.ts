import { Router } from "express";

import asyncHandler
from "../middlewares/asyncHandler";

import { authenticate }
from "../middlewares/authenticate";

import { authorize }
from "../middlewares/authorize";

import {
  getAnalyticsController,
} from "../controllers/analytics.controller";

const router = Router();

router.get(
  "/",
  authenticate,
  authorize(
    "super_admin",
    "admin"
  ),
  asyncHandler(
    getAnalyticsController
  )
);

export default router;