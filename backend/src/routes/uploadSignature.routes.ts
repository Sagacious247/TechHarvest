import { Router } from "express";

import asyncHandler from "../middlewares/asyncHandler";
import { authenticate } from "../middlewares/authenticate";
import { authorize } from "../middlewares/authorize";

import {
  getUploadSignatureController,
} from "../controllers/uploadSignature.controller";

const router = Router();

router.post(
  "/signature",
  authenticate,
  authorize("admin", "super_admin"),
  asyncHandler(getUploadSignatureController)
);

export default router;