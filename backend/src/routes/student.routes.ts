import { Router } from "express";
import { createStudent } from "../controllers/student.controller";

const router = Router();

router.post("/register", createStudent);

export default router;