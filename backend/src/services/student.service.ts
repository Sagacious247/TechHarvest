import mongoose from "mongoose";
import Student from "../models/student.model";
import AppError from "../utils/AppError";
import { generateToken } from "../utils/generateToken";
import { createNotification } from "./notification.service";

interface RegisterStudentInput {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  occupation?: string;
  experience?: string;
}

export const registerStudent = async (
  data: RegisterStudentInput
) => {

  const session = await mongoose.startSession();

  session.startTransaction();

  try {

    /**
     * Check existing student
     */
    const existingStudent =
      await Student.findOne({
        email: data.email,
      }).session(session);

    if (existingStudent) {

      throw new AppError(
        "Student already exists.",
        409
      );

    }

    /**
     * Create student
     */
    const students =
      await Student.create(
        [
          {
            fullName: data.fullName,
            email: data.email,
            password: data.password,
            phone: data.phone,
            occupation: data.occupation,
            experience: data.experience,
          },
        ],
        {
          session,
        }
      );

    const student = students[0];

    await createNotification(

  student._id.toString(),

  "Welcome to TechHarvest!",

  "Your account has been created successfully. Start learning today.",

  "welcome"

);

    await session.commitTransaction();

    session.endSession();

    const studentObject = student.toObject();

    delete (studentObject as any).password;

    const token = generateToken(
  student._id.toString(),
  student.email,
  "student",
  "student"
);

   return {
  student: studentObject,
  token,
};

  } catch (error) {

    await session.abortTransaction();

    session.endSession();

    throw error;

  }

};