import express from "express";
import { authorize } from "../middlewares/authorize";

import {
  registerAdminController,
  loginAdminController,
} from "../controllers/auth.controller";

import {
  authenticate,
  AuthRequest,
} from "../middlewares/authenticate";

const router = express.Router();

router.post(
  "/register",
  registerAdminController
);

router.post(
  "/login",
  loginAdminController
);

router.get(
  "/profile",
  authenticate,
  authorize("super_admin", "admin"),
  (req: AuthRequest, res) => {
    res.json({
      success: true,
      message: "Authentication & Authorization successful.",
      admin: req.admin,
    });
  }
);

export default router;