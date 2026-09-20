import { Router } from "express";
import { AIController } from "../controllers/AIController";

const router = Router();

const controller =
  new AIController();

router.post(
  "/chat",
  controller.chat.bind(controller)

);

export default router;