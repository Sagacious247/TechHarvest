import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import env from "../config/env";
import Admin from "../models/admin.model";
import AppError from "../utils/AppError";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {

  try {

    const authHeader = req.headers.authorization;

    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {
      return next(
        new AppError(
          "Access token is required.",
          401
        )
      );
    }

    const token = authHeader.substring(7);

    const decoded = jwt.verify(
      token,
      env.JWT_SECRET
    ) as Express.UserPayload;

    if (decoded.type !== "admin") {
      return next(
        new AppError(
          "Unauthorized.",
          401
        )
      );
    }

    const admin = await Admin.findById(decoded.id);

    if (!admin) {
      return next(
        new AppError(
          "Account no longer exists.",
          401
        )
      );
    }

    if (admin.status !== "active") {
      return next(
        new AppError(
          "Your account has been disabled.",
          403
        )
      );
    }

    // req.user = {
    //   id: admin._id.toString(),
    //   email: admin.email,
    //   role: admin.role,
    //   type: "admin",
    // };

    console.log("===== AUTHENTICATE =====");
console.log("Database role:", admin.role);

req.user = {
  id: admin._id.toString(),
  email: admin.email,
  role: admin.role,
  type: "admin",
};

console.log("req.user:", req.user);
console.log("========================");

    next();

  } catch {

    next(
      new AppError(
        "Invalid or expired token.",
        401
      )
    );

  }

};