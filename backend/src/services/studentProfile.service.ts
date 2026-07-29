import Student from "../models/student.model";
import AppError from "../utils/AppError";

interface UpdateProfileInput {
  fullName?: string;
  phone?: string;
  occupation?: string;
  experience?: string;
}

export const updateStudentProfile = async (
  studentId: string,
  data: UpdateProfileInput
) => {

  const student = await Student.findById(studentId);

  if (!student) {
    throw new AppError(
      "Student not found.",
      404
    );
  }

  if (data.fullName !== undefined)
    student.fullName = data.fullName;

  if (data.phone !== undefined)
    student.phone = data.phone;

  if (data.occupation !== undefined)
    student.occupation = data.occupation;

  if (data.experience !== undefined)
    student.experience = data.experience;

  await student.save();

  const studentObject = student.toObject();

  delete (studentObject as any).password;

  return studentObject;

};