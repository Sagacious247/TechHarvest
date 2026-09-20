console.log("🔥 INGESTION ROUTES LOADED");
import { Router } from "express";
import { IngestionController } from "../controllers/IngestionController";

const router = Router();

const controller = new IngestionController();

router.post(
  "/ingest",
  controller.ingest.bind(controller)
);

export default router;