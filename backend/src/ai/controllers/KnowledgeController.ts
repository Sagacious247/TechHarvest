import { Request, Response, NextFunction } from "express";

import { KnowledgeService } from "../services/KnowledgeService";
import { KnowledgeDocumentRepository } from "../repositories/KnowledgeDocumentRepository";

export class KnowledgeController {

  private service = new KnowledgeService(
    new KnowledgeDocumentRepository()
  );

  async create(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {

    const document =
      await this.service.add(req.body);

    res.status(201).json({
      success: true,
      data: document,
    });

  } catch (error) {
    next(error);
  }
}

  async getAll(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {

    console.log("🔥 GET ALL KNOWLEDGE");

    const documents =
      await this.service.getAll();

    console.log(documents);

    res.json({
      success: true,
      data: documents,
    });

  } catch (error) {

    console.error("========== KNOWLEDGE ERROR ==========");
    console.error(error);

    next(error);
  }
}

  async getById(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {

    try {

      const document =
        await this.service.getById(req.params.id);

      res.json({
        success: true,
        data: document,
      });

    } catch (error) {
      next(error);
    }

  }

  async update(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
) {

    try {

      const document =
        await this.service.update(
          req.params.id,
          req.body
        );

      res.json({
        success: true,
        data: document,
      });

    } catch (error) {
      next(error);
    }

  }

  async delete(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
) {

    try {

      await this.service.delete(
        req.params.id
      );

      res.json({
        success: true,
        message:
          "Knowledge document deleted successfully.",
      });

    } catch (error) {
      next(error);
    }

  }

}