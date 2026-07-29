import { Request, Response } from "express";

import {
  getStudentPaymentHistory,
  getAllPaymentHistory,
} from "../services/paymentHistory.service";

/**
 * Student Payment History
 */
export const getPaymentHistoryController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const history = await getStudentPaymentHistory(
    req.user!.id
  );

  res.status(200).json({
    success: true,
    data: history,
  });

};

/**
 * Admin Payment History
 */
export const getAllPaymentHistoryController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const history =
    await getAllPaymentHistory();

  res.status(200).json({
    success: true,
    data: history,
  });

};