import { Request, Response } from "express";

import {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  publishCourse,
  featureCourse
} from "../services/adminCourse.service";


import { getParam } from "../utils/getParam";
import { getAuthenticatedUser } from "../utils/getAuthenticatedUser";

/**
 * Get All Courses
 */
export const getAllCoursesController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const page =
    Number(req.query.page) || 1;

  const limit =
    Number(req.query.limit) || 10;

  const search =
    String(req.query.search || "");

  const status =
    req.query.status
      ? String(req.query.status)
      : undefined;

  const category =
    req.query.category
      ? String(req.query.category)
      : undefined;

  const level =
    req.query.level
      ? String(req.query.level)
      : undefined;

  const result =
    await getAllCourses({

      page,

      limit,

      search,

      status,

      category,

      level,

    });

  res.status(200).json({

    success: true,

    data: result.courses,

    pagination: result.pagination,

  });

};

/**
 * Get Single Course
 */
export const getCourseController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const courseId = getParam(
    req.params.id,
    "Course ID"
  );

  const course =
    await getCourseById(courseId);

  res.status(200).json({

    success: true,

    data: course,

  });

};

/**
 * Create Course
 */

export const createCourseController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const admin = getAuthenticatedUser(req.user);

const adminId = admin.id;

  const course = await createCourse(
    req.body,
    adminId
  );

  res.status(201).json({

    success: true,

    message: "Course created successfully.",

    data: course,

  });

};

/**
 * -----------------------------------------
 * Update Course
 * -----------------------------------------
 */
export const updateCourseController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const courseId = getParam(
    req.params.id,
    "Course ID"
  );

  const course = await updateCourse(
    courseId,
    req.body,
    req.user!.id,
    req.user!.role
  );

  res.status(200).json({
    success: true,
    message: "Course updated successfully.",
    data: course,
  });

};


/**
 * -----------------------------------------
 * Publish Course
 * -----------------------------------------
 */
export const publishCourseController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const courseId = getParam(
    req.params.id,
    "Course ID"
  );

  const course = await publishCourse(
    courseId,
    req.user!.id,
    req.user!.role
  );

  res.status(200).json({
    success: true,
    message: "Course published successfully.",
    data: course,
  });

};


/**
 * -----------------------------------------
 * Delete Course
 * -----------------------------------------
 */
export const deleteCourseController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const courseId = getParam(
    req.params.id,
    "Course ID"
  );

  const result = await deleteCourse(
    courseId,
    req.user!.id,
    req.user!.role
  );

  res.status(200).json({
    success: true,
    ...result,
  });

};


/**
 * -----------------------------------------
 * Feature Course
 * -----------------------------------------
 */
export const featureCourseController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const courseId = getParam(
    req.params.id,
    "Course ID"
  );

  const course = await featureCourse(
    courseId,
    req.user!.id,
    req.user!.role
  );

  res.status(200).json({
    success: true,
    message: course.isFeatured
      ? "Course featured successfully."
      : "Course removed from featured.",
    data: course,
  });

};

// /**
//  * Update Course
//  */
// export const updateCourseController = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {

//   const courseId = getParam(
//     req.params.id,
//     "Course ID"
//   );

//   const course =
//     await updateCourse(
//       courseId,
//       req.body
//     );

//   res.status(200).json({

//     success: true,

//     message:
//       "Course updated successfully.",

//     data: course,

//   });

// };


// export const publishCourseController = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {

//   const id = getParam(
//     req.params.id,
//     "Course ID"
//   );

//   const course = await publishCourse(id);

//   res.status(200).json({

//     success: true,

//     message: "Course published successfully.",

//     data: course,

//   });

// };

// /**
//  * Delete Course
//  */
// export const deleteCourseController = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {

//   const courseId = getParam(
//     req.params.id,
//     "Course ID"
//   );

//   const result =
//     await deleteCourse(courseId);

//   res.status(200).json({

//     success: true,

//     ...result,

//   });

// };

// /**
//  * -----------------------------------------
//  * Feature Course
//  * -----------------------------------------
//  */
// export const featureCourseController = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {

//   const id = getParam(
//     req.params.id,
//     "Course ID"
//   );

//   const course = await featureCourse(id);

//   res.status(200).json({

//     success: true,

//     message: course.isFeatured
//       ? "Course featured successfully."
//       : "Course removed from featured.",

//     data: course,

//   });

// };