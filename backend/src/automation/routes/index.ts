import { Router } from "express";
import automationRoutes from "../../automation/routes/automation.routes";

const router = Router();

router.use(
  "/automation",
  automationRoutes
);

export default router;