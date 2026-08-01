import { Router } from "express";

import asyncHandler from "../middlewares/asyncHandler";
import { authenticate } from "../middlewares/authenticate";
import { authorize } from "../middlewares/authorize";

import upload from "../middlewares/upload";

import {
  uploadVideoController,
} from "../controllers/upload.controller";

const router = Router();

router.post(
  "/video",
  authenticate,
  authorize("super_admin", "admin"),
  upload.single("video"),
  asyncHandler(uploadVideoController)
);

export default router;