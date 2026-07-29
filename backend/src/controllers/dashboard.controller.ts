import { Request, Response } from "express";

import { getStudentDashboard } from "../services/dashboard.service";

export const getStudentDashboardController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const dashboard = await getStudentDashboard(
    req.user!.id
  );

  res.status(200).json({
    success: true,
    data: dashboard,
  });

};