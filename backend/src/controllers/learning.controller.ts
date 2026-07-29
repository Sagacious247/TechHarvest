import { Request, Response } from "express";
import { getParam } from "../utils/getParam";
import { getLearningCourse } from "./../services/learning.service";

export const getLearningCourseController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const courseId = getParam(
    req.params.courseId,
    "Course ID"
  );

  const studentId = req.user!.id;

const data = await getLearningCourse(
  courseId,
  studentId
);

  res.status(200).json({
    success: true,
    data,
  });

};