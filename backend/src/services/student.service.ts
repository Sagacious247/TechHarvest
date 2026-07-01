import Student from "../models/student.model";
import { createEnrollment } from "./enrollment.service";
import { COURSE } from "../constants/course";
import { COURSE_PRICE } from "../constants/prices";

interface RegisterStudentInput {
  fullName: string;
  email: string;
  phone: string;
  occupation?: string;
  experience?: string;
}

export const registerStudent = async (
  data: RegisterStudentInput
) => {

  // Check if student already exists
  const existingStudent = await Student.findOne({
    email: data.email,
  });

  if (existingStudent) {
    throw new Error("Student already exists.");
  }

  // Create Student
  const student = await Student.create(data);

  // Create Enrollment automatically
  const enrollment = await createEnrollment(
    student._id.toString(),
    COURSE.AI_BOOTCAMP,
    COURSE_PRICE.AI_BOOTCAMP
  );

  return {
    student,
    enrollment,
  };
};
