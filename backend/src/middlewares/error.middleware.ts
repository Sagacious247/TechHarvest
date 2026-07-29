import { Request, Response, NextFunction } from "express";

import AppError from "../utils/AppError";

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {

  console.error(err);

  const statusCode =
    err instanceof AppError
      ? err.statusCode
      : 500;

  res.status(statusCode).json({

    success: false,

    message:
      err.message ||
      "Internal Server Error",

    ...(process.env.NODE_ENV === "development" && {
      stack: err.stack,
    }),

  });

};