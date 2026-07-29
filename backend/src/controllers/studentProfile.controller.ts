import { Request, Response } from "express";
import Student from "../models/student.model";
import { updateStudentProfile } from "../services/studentProfile.service";

export const getStudentProfile = async (
  req: Request,
  res: Response
): Promise<void> => {

  if (!req.user) {
    res.status(401).json({
      success: false,
      message: "Unauthorized.",
    });
    return;
  }

  const student = await Student.findById(req.user.id)
    .select(
      "fullName email phone occupation experience status lastLogin"
    );

  if (!student) {
    res.status(404).json({
      success: false,
      message: "Student not found.",
    });
    return;
  }

  res.status(200).json({
    success: true,
    user: student,
  });

};

export const updateProfile = async (
  req: Request,
  res: Response
): Promise<void> => {

  const student =
    await updateStudentProfile(
      req.user!.id,
      req.body
    );

  res.status(200).json({

    success: true,

    message:
      "Profile updated successfully.",

    user: student,

  });

};