import { Router } from "express";
import { TestController } from "../controllers/TestController";

const router = Router();

const controller =
  new TestController();

router.post(
  "/embedding",
  controller.testEmbedding
);

router.get(
  "/models",
  controller.listModels
);

export default router;