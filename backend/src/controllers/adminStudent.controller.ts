import { Request, Response } from "express";

import {
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} from "../services/adminStudent.service";

import { getParam } from "../utils/getParam";

export const getAllStudentsController = async (
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

  const paymentStatus =
    req.query.paymentStatus
      ? String(req.query.paymentStatus)
      : undefined;

  const result =
    await getAllStudents({

      page,

      limit,

      search,

      status,

      paymentStatus,

    });

  res.status(200).json({

    success: true,

    data: result.students,

    pagination: result.pagination,

  });

};

export const getStudentController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const studentId = getParam(
    req.params.id,
    "Student ID"
  );

  const student = await getStudentById(studentId);

  res.status(200).json({

    success: true,

    data: student,

  });

};

export const updateStudentController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const studentId = getParam(
    req.params.id,
    "Student ID"
  );

  const student = await updateStudent(
    studentId,
    req.body
  );

  res.status(200).json({

    success: true,

    message: "Student updated successfully.",

    data: student,

  });

};

export const deleteStudentController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const studentId = getParam(
    req.params.id,
    "Student ID"
  );

  const result = await deleteStudent(studentId);

  res.status(200).json({

    success: true,

    ...result,

  });

};