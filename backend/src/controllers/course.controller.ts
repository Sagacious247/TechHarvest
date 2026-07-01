import { Request, Response } from "express";

import {
  createCourse,
  getAllCourses,
} from "../services/course.service";

export const createCourseController = async (
  req: Request,
  res: Response
): Promise<void> => {

  try {

    const course = await createCourse(req.body);

    res.status(201).json({
      success: true,
      message: "Course created successfully.",
      data: course,
    });

  } catch (error: any) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

export const getCoursesController = async (
  req: Request,
  res: Response
): Promise<void> => {

  try {

    const courses = await getAllCourses();

    res.status(200).json({
      success: true,
      data: courses,
    });

  } catch (error: any) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};
