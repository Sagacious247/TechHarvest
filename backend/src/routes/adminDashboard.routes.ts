import { Router } from "express";

import { authenticate } from "../middlewares/authenticate";
import { authorize } from "../middlewares/authorize";

import {
  getDashboardController,
} from "../controllers/adminDashboard.controller";

const router = Router();

router.get(
  "/",
  authenticate,
  authorize("super_admin", "admin"),
  getDashboardController
);

export default router;