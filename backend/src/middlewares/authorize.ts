import { Response, NextFunction } from "express";
import { AuthRequest } from "./authenticate";

export const authorize = (
  ...roles: string[]
) => {

  return (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ): void => {

    if (!req.admin) {

      res.status(401).json({
        success: false,
        message: "Unauthorized.",
      });

      return;
    }

    if (!roles.includes(req.admin.role)) {

      res.status(403).json({
        success: false,
        message: "Forbidden.",
      });

      return;
    }

    next();

  };

};
