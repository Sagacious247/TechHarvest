import { Request, Response, NextFunction } from "express";
import { ConversationService } from "../services/ConversationService";

export class ConversationController {

  private service =
    new ConversationService();

  //
  // Create a new chat session
  //
  async createSession(
    req: Request,
    res: Response,
    next: NextFunction
  ) {

    try {

      const {
        tenantId,
        userId,
      } = req.body;

      const session =
        await this.service.createSession(
          tenantId,
          userId
        );

      res.status(201).json({
        success: true,
        data: session,
      });

    } catch (error) {
      next(error);
    }

  }

  //
  // Get all sessions
  //
  async getSessions(
    req: Request,
    res: Response,
    next: NextFunction
  ) {

    try {

      const {
        tenantId,
        userId,
      } = req.query;

      const sessions =
        await this.service.getSessions(
          tenantId as string,
          userId as string
        );

      res.json({
        success: true,
        data: sessions,
      });

    } catch (error) {
      next(error);
    }

  }

  //
  // Get one conversation
  //
  async getConversation(
    req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {

    try {

      const conversation =
        await this.service.getConversation(
          req.params.id
        );

      res.json({
        success: true,
        data: conversation,
      });

    } catch (error) {
      next(error);
    }

  }

  //
  // Rename chat
  //
  async renameSession(
    req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {

    try {

      const session =
        await this.service.renameSession(
          req.params.id,
          req.body.title
        );

      res.json({
        success: true,
        data: session,
      });

    } catch (error) {
      next(error);
    }

  }

  //
  // Delete chat
  //
  async deleteSession(
    req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {

    try {

      await this.service.deleteSession(
        req.params.id
      );

      res.json({
        success: true,
        message:
          "Conversation deleted successfully.",
      });

    } catch (error) {
      next(error);
    }

  }

}