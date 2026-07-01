import crypto from "crypto";
import { Request, Response, NextFunction } from "express";
import env from "../config/env";

export const verifyPaystackSignature = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {

  const signature = req.headers["x-paystack-signature"];

  // Ensure the signature exists and is a string
  if (typeof signature !== "string") {
    res.status(401).json({
      success: false,
      message: "Missing Paystack signature.",
    });
    return;
  }

  const hash = crypto
    .createHmac("sha512", env.PAYSTACK_SECRET_KEY)
    .update(req.body)
    .digest("hex");

  if (hash !== signature) {
    res.status(401).json({
      success: false,
      message: "Invalid Paystack signature.",
    });
    return;
  }

  next();
};