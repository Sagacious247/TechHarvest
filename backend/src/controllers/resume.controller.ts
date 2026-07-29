import { Request, Response } from "express";

import { getResumeLesson } from "../services/resume.service";

export const resumeLearningController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const result =
    await getResumeLesson(
      req.user!.id
    );

  res.status(200).json({
    success: true,
    data: result,
  });

};