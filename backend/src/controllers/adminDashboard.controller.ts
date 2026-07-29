import { Request, Response } from "express";

import {
  getDashboardStatistics,
} from "../services/adminDashboard.service";

export const getDashboardController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const dashboard =
    await getDashboardStatistics();

  res.status(200).json({

    success: true,

    data: dashboard,

  });

};