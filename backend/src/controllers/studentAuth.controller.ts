import { Request, Response } from "express";
import { loginStudent } from "../services/studentAuth.service";

export const loginStudentController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const result = await loginStudent(req.body);

  res.status(200).json({
    success: true,
    message: "Login successful.",
    token: result.token,
    student: result.student,
  });

};
