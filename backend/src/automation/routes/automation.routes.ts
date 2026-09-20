import { Router } from "express";

import { AutomationController } from "../controllers/AutomationController";

const router = Router();

const controller =
  new AutomationController();

router.post(
  "/dispatch",
  controller.dispatch.bind(controller)
);

export default router;