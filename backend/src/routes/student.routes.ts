import { Router } from "express";
import validate from "../middlewares/validate";
import { registerStudentSchema } from "../validators/student.validator";

import { createStudent } from "../controllers/student.controller";

import asyncHandler from "../middlewares/asyncHandler";

const router = Router();

router.post(
  "/register",
  validate(registerStudentSchema),
  asyncHandler(createStudent)
);


export default router;
