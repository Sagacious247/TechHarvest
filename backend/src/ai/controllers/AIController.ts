import { Request, Response, NextFunction } from "express";
import { AIChatService } from "../services/AIChatService";

export class AIController {

  private chatService = new AIChatService();

  async chat(
    req: Request,
    res: Response,
    next: NextFunction
  ) {

    try {

      const {

        tenantId,

        userId,

        sessionId,

        question,

      } = req.body;

      const response =
        await this.chatService.chat(

          tenantId,

          userId,

          sessionId,

          question

        );

      res.json({

        success: true,

        data: response,

      });

    } catch (error) {

      next(error);

    }

  }

}