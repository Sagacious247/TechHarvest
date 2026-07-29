import { Request, Response } from "express";

export const healthController = (
  req: Request,
  res: Response
): void => {

  res.status(200).json({
    success: true,
    status: "OK",
    environment: process.env.NODE_ENV || "development",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });

};