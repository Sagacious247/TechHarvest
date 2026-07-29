// import { Request, Response } from "express";

// import { getEnrollmentByStudent } from "../services/enrollment.service";

// export const getStudentEnrollmentsController = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {

//   const studentId = Array.isArray(req.params.studentId)
//     ? req.params.studentId[0]
//     : req.params.studentId;

//   const enrollments =
//     await getEnrollmentByStudent(studentId);

//   res.status(200).json({
//     success: true,
//     data: enrollments,
//   });

// };





import { Request, Response } from "express";

import {
  getEnrollmentByStudent,
  createEnrollmentForStudent,
} from "../services/enrollment.service";

/**
 * Create Enrollment
 */
export const createEnrollmentController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const studentId = req.user!.id;

  const { courseId } = req.body;

  const enrollment =
    await createEnrollmentForStudent(
      studentId,
      courseId
    );

  res.status(201).json({

    success: true,

    message:
      "Enrollment created successfully.",

    data: enrollment,

  });

};

/**
 * Get Student Enrollments
 */
/**
 * Get Logged-in Student Enrollments
 */
export const getStudentEnrollmentsController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const studentId = req.user!.id;

  const enrollments =
    await getEnrollmentByStudent(studentId);

  res.status(200).json({

    success: true,

    data: enrollments,

  });

};