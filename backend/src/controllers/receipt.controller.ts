import { Request, Response } from "express";

import {
  getStudentReceipts,
  getReceiptById,
  getAllReceipts,
} from "../services/receipt.service";
import { getParam } from "../utils/getParam";

/**
 * -----------------------------------------
 * Student Receipts
 * GET /receipts/me
 * -----------------------------------------
 */
export const getMyReceiptsController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const studentId = req.user!.id;

  const receipts =
    await getStudentReceipts(studentId);

  res.status(200).json({

    success: true,

    data: receipts,

  });

};

/**
 * -----------------------------------------
 * Single Receipt
 * GET /receipts/:id
 * -----------------------------------------
 */
export const getReceiptController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const receiptId = getParam(
    req.params.id,
    "Receipt ID"
  );

  const receipt =
    await getReceiptById(
      receiptId
    );

  res.status(200).json({

    success: true,

    data: receipt,

  });

};

/**
 * -----------------------------------------
 * Admin
 * All Receipts
 * GET /receipts
 * -----------------------------------------
 */
export const getAllReceiptsController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const receipts =
    await getAllReceipts();

  res.status(200).json({

    success: true,

    data: receipts,

  });

};

