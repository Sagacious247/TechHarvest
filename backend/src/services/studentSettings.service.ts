import Student from "../models/student.model";
import AppError from "../utils/AppError";

export const changePassword = async (
  studentId: string,
  currentPassword: string,
  newPassword: string
) => {

  const student = await Student.findById(studentId)
    .select("+password");

  if (!student) {
    throw new AppError(
      "Student not found.",
      404
    );
  }

  const isMatch =
    await student.comparePassword(
      currentPassword
    );

  if (!isMatch) {

    throw new AppError(
      "Current password is incorrect.",
      400
    );

  }

  student.password = newPassword;

  await student.save();

  return true;

};