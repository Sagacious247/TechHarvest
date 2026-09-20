import { Request, Response, NextFunction } from "express";

import { AutomationService } from "../services/AutomationService";

export class AutomationController {

  private service =
    new AutomationService();

  async dispatch(
    req: Request,
    res: Response,
    next: NextFunction
  ) {

    try {

      await this.service.execute(
        req.body
      );

      res.json({

        success: true,

      });

    }

    catch (error) {

      next(error);

    }

  }

}