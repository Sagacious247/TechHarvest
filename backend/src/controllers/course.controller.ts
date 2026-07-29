import { Request, Response } from "express";

import asyncHandler from "../middlewares/asyncHandler";

import {
  createCourse,
  getAllCourses,
  getCourseById,
  publishCourse,
} from "../services/course.service";

import { getParam } from "../utils/getParam";

/**
 * Create Course
 */
export const createCourseController = asyncHandler(

  async (
    req: Request,
    res: Response
  ) => {

    const course =
      await createCourse(req.body);

    res.status(201).json({

      success: true,

      message:
        "Course created successfully.",

      data: course,

    });

  }

);

/**
 * Get All Courses
 */
export const getCoursesController = asyncHandler(

  async (
    req: Request,
    res: Response
  ) => {

    const courses =
      await getAllCourses();

    res.status(200).json({

      success: true,

      data: courses,

    });

  }

);

/**
 * Get Single Course
 */
export const getCourseController = asyncHandler(

  async (
    req: Request,
    res: Response
  ) => {

    const id = getParam(
      req.params.id,
      "Course ID"
    );

    const course =
      await getCourseById(id);

    res.status(200).json({

      success: true,

      data: course,

    });

  }

);


/**
 * -----------------------------------------
 * Publish Course
 * -----------------------------------------
 */

export const publishCourseController = asyncHandler(

  async (
    req: Request,
    res: Response
  ) => {

    const id = getParam(
      req.params.id,
      "Course ID"
    );

    const course =
      await publishCourse(id);

    res.status(200).json({

      success: true,

      message:
        "Course published successfully.",

      data: course,

    });

  }

);