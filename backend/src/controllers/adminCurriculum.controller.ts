import { Request, Response } from "express";
import {
  getCurriculumByCourse,
} from "../services/adminCurriculum.service";

export const getCurriculumController =
async (
  req: Request,
  res: Response
) => {
  const data =
    await getCurriculumByCourse(
      req.params.courseId as string
    );

  res.json({
    success: true,
    data,
  });
};