import { Request, Response } from "express";

import { getMyCourses } from "../services/myCourses.service";

export const getMyCoursesController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const courses = await getMyCourses(
    req.user!.id
  );

  res.status(200).json({
    success: true,
    data: courses,
  });

};