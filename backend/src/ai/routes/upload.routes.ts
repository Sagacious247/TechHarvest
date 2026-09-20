import { Router } from "express";

import upload from "../../middlewares/upload";

import { AIUploadController } from "../upload/AIUploadController";

const router = Router();

const controller =
  new AIUploadController();

router.post(
  "/pdf",
  upload.single("file"),
  controller.uploadPDF.bind(controller)

);

export default router;