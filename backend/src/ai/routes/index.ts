console.log("🔥 AI ROUTES INDEX LOADED");
import { Router } from "express";

import testRoutes from "./test.routes";
import aiRoutes from "./ai.routes";
import ingestionRoutes from "./ingestion.routes";
import knowledgeRoutes from "./knowledge.routes";
import uploadRoutes from "./upload.routes";
import conversationRoutes from "./conversation.routes";

const router = Router();

router.use("/test", testRoutes);

router.use("/", aiRoutes);


router.use("/knowledge", ingestionRoutes);

router.use("/knowledge", knowledgeRoutes);
router.use("/upload", uploadRoutes);

router.use(
  "/conversation",
  conversationRoutes
);

export default router;