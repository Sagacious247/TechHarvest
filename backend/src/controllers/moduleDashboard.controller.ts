import { Request, Response } from "express";

import {
  getModuleDashboard,
} from "../services/moduleDashboard.service";

export const getModuleDashboardController =
async (
  req: Request,
  res: Response
) => {

  const { courseId } = req.params;

  if (Array.isArray(courseId)) {
    throw new Error("Invalid course id.");
  }

  // const dashboard =
  //   await getModuleDashboard(courseId);

  const dashboard = await getModuleDashboard(
  courseId,
  req.user!.id,
  req.user!.role
);

  res.json({
    success: true,
    data: dashboard,
  });

};