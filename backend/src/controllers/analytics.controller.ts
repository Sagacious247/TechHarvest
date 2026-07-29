import { Request, Response } from "express";

import { getAnalytics }
from "../services/analytics.service";

export const getAnalyticsController =
async (
  req: Request,
  res: Response
): Promise<void> => {

  const analytics =
    await getAnalytics();

  res.status(200).json({

    success: true,

    data: analytics,

  });

};