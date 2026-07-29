import { Router } from "express";

import asyncHandler from "../middlewares/asyncHandler";

import {
  studentAuthenticate,
} from "../middlewares/studentAuthenticate";

import {
  authenticate,
} from "../middlewares/authenticate";

import {
  authorize,
} from "../middlewares/authorize";

import {
  getMyCertificatesController,
  verifyCertificateController,
  getAllCertificatesController,
} from "../controllers/certificate.controller";

const router = Router();

/**
 * -----------------------------------------
 * Student
 * -----------------------------------------
 */

router.get(
  "/my-certificates",
  studentAuthenticate,
  asyncHandler(
    getMyCertificatesController
  )
);

/**
 * -----------------------------------------
 * Public Verification
 * -----------------------------------------
 */

router.get(
  "/verify/:certificateNumber",
  asyncHandler(
    verifyCertificateController
  )
);

/**
 * -----------------------------------------
 * Admin
 * -----------------------------------------
 */

router.get(
  "/",
  authenticate,
  authorize("super_admin", "admin"),
  asyncHandler(
    getAllCertificatesController
  )
);

export default router;