import { Router } from "express";
import courseRoutes from "./course.routes";

import studentRoutes from "./student.routes";
import paymentRoutes from "./payment.routes";
import authRoutes from "./auth.routes";

const router = Router();

router.use("/students", studentRoutes);
router.use("/payments", paymentRoutes);
router.use("/auth", authRoutes);
router.use("/courses", courseRoutes);

export default router;