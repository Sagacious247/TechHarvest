import { Router } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import {
  authenticate,
} from "../middlewares/authenticate";

import {
  authorize,
} from "../middlewares/authorize";

import {
  getCurriculumController,
} from "../controllers/adminCurriculum.controller";

const router = Router();

router.get(
  "/:courseId",
  authenticate,
  authorize("super_admin"),
  asyncHandler(
    getCurriculumController
  )
);

export default router;