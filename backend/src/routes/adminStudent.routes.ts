import { Router } from "express";

import { authenticate } from "../middlewares/authenticate";
import { authorize } from "../middlewares/authorize";

import {
  getAllStudentsController,
  getStudentController,
  updateStudentController,
  deleteStudentController,
} from "../controllers/adminStudent.controller";

const router = Router();

router.use(
  authenticate,
  authorize("super_admin", "admin")
);

router.get(
  "/",
  getAllStudentsController
);

router.get(
  "/:id",
  getStudentController
);

router.patch(
  "/:id",
  updateStudentController
);

router.delete(
  "/:id",
  deleteStudentController
);

export default router;