import { Request, Response } from "express";

import {
  markLessonCompleted,
  getStudentProgress,
  updateVideoProgress,
} from "../services/progress.service";

export const completeLessonController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const studentId = req.user!.id;

  const lessonId = Array.isArray(req.params.lessonId)
    ? req.params.lessonId[0]
    : req.params.lessonId;

  const progress =
    await markLessonCompleted(
      studentId,
      lessonId
    );

  res.status(200).json({
    success: true,
    message: "Lesson completed successfully.",
    data: progress,
  });

};

export const getProgressController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const studentId = req.user!.id;

  const moduleId = Array.isArray(req.params.moduleId)
    ? req.params.moduleId[0]
    : req.params.moduleId;

  const progress =
    await getStudentProgress(
      studentId,
      moduleId
    );

  res.status(200).json({
    success: true,
    data: progress,
  });

};

export const updateVideoProgressController = async (

  req: Request,

  res: Response

): Promise<void> => {

  const studentId =
    req.user!.id;

  const {

    lessonId,

    currentTime,

    duration,

  } = req.body;

  const progress =
    await updateVideoProgress(

      studentId,

      lessonId,

      currentTime,

      duration

    );

  res.status(200).json({

    success: true,

    data: progress,

  });

};