import Student from "../models/student.model";
import AppError from "../utils/AppError";
import { generateToken } from "../utils/generateToken";

interface LoginInput {
  email: string;
  password: string;
}

export const loginStudent = async (
  data: LoginInput
) => {

  const student = await Student.findOne({
    email: data.email,
  }).select("+password");

  if (!student) {
    throw new AppError(
      "Invalid email or password.",
      401
    );
  }

  /**
   * Account Status Check
   */
  if (student.status !== "active") {
    throw new AppError(
      "Your account has been disabled. Please contact support.",
      403
    );
  }

  const isPasswordCorrect =
    await student.comparePassword(
      data.password
    );

  if (!isPasswordCorrect) {
    throw new AppError(
      "Invalid email or password.",
      401
    );
  }

  /**
   * Update Last Login
   */
  student.lastLogin = new Date();

  await student.save();

  const token = generateToken(
    student._id.toString(),
    student.email,
    "student",
    "student"
  );

  const studentObject = student.toObject();

  delete (studentObject as any).password;

  return {

    token,

    student: studentObject,

  };

};