import { Router } from "express";

import asyncHandler from "../middlewares/asyncHandler";
import validate from "../middlewares/validate";

import {
  authenticate,
} from "../middlewares/authenticate";

import {
  authorize,
} from "../middlewares/authorize";

import {
  createModuleController,
  getModulesController,
  getModuleController, 
  updateModuleController, 
  deleteModuleController,
  reorderModulesController,
} from "../controllers/module.controller";

import {
  createModuleSchema,
} from "../validators/module.validator";

const router = Router();

router.post(
  "/",
  authenticate,
  authorize("super_admin", "admin"),
  validate(createModuleSchema),
  asyncHandler(createModuleController)
);

router.get(
  "/course/:courseId",
  asyncHandler(getModulesController)
);


router.get(
  "/:id",
  asyncHandler(getModuleController)
);

router.patch(
  "/:id",
  authenticate,
  authorize("super_admin", "admin"),
  asyncHandler(updateModuleController)
);

router.delete(
  "/:id",
  authenticate,
  authorize("super_admin", "admin"),
  asyncHandler(deleteModuleController)
);

router.patch(
  "/reorder",
  authenticate,
  authorize("super_admin", "admin"),
  asyncHandler(reorderModulesController)
);

export default router;
