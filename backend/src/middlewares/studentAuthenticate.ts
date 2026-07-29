import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import env from "../config/env";
import Student from "../models/student.model";
import AppError from "../utils/AppError";

export const studentAuthenticate = async (
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

    if (decoded.type !== "student") {
      return next(
        new AppError(
          "Unauthorized.",
          401
        )
      );
    }

    const student = await Student.findById(decoded.id);

    if (!student) {
      return next(
        new AppError(
          "Account no longer exists.",
          401
        )
      );
    }

    if (student.status !== "active") {
      return next(
        new AppError(
          "Your account has been disabled.",
          403
        )
      );
    }

    req.user = {
      id: student._id.toString(),
      email: student.email,
      role: "student",
      type: "student",
    };

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