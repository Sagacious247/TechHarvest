import { Router } from "express";
import { ConversationController } from "../controllers/ConversationController";

const router = Router();

const controller =
  new ConversationController();

router.post(
  "/session",
  controller.createSession.bind(controller)
);

router.get(
  "/sessions",
  controller.getSessions.bind(controller)
);

router.get(
  "/session/:id",
  controller.getConversation.bind(controller)
);

router.patch(
  "/session/:id",
  controller.renameSession.bind(controller)
);

router.delete(
  "/session/:id",
  controller.deleteSession.bind(controller)
);

export default router;