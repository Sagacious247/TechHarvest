import { Request, Response } from "express";
import { registerStudent } from "../services/student.service";

export const createStudent = async (
  req: Request,
  res: Response
): Promise<void> => {

  const result = await registerStudent(req.body);

  res.status(201).json({
    success: true,
    message: "Registration successful.",
    token: result.token,
    student: result.student,
  });

};