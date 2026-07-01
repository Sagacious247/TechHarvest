import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import env from "../config/env";

export interface AuthRequest extends Request {
  admin?: {
    id: string;
    role: string;
  };
}

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({
      success: false,
      message: "Access token is required.",
    });
    return;
  }

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.substring(7)
    : authHeader;

  try {

    const decoded = jwt.verify(
      token,
      env.JWT_SECRET
    ) as {
      id: string;
      role: string;
    };

    req.admin = decoded;

    next();

  } catch {

    res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });

  }

};
