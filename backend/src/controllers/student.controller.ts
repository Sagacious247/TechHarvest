import { Request, Response } from "express";
import { registerStudent } from "../services/student.service";

export const createStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await registerStudent(req.body);

    res.status(201).json({
      success: true,
      message: "Registration successful.",
      data: {
        student: result.student,
        enrollment: result.enrollment,
      },
    });

  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};