import { Request, Response, NextFunction } from "express";
import { AIUploadService } from "../services/AIUploadService";

export class AIUploadController {
  private uploadService = new AIUploadService();

  async uploadPDF(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "Please upload a PDF file.",
        });
      }

      const result =
        await this.uploadService.processPDF(
          req.file
        );

      res.json({
        success: true,
        message: "PDF uploaded successfully.",
        data: result,
      });

    } catch (error) {
      next(error);
    }
  }
}