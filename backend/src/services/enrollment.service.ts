import mongoose from "mongoose";

import Enrollment from "../models/enrollment.model";
import Student from "../models/student.model";
import Course from "../models/course.model";

import AppError from "../utils/AppError";

/**
 * Create Enrollment
 */
export const createEnrollment = async (
  studentId: string,
  courseId: string,
  amount: number,
  session: mongoose.ClientSession | null = null
) => {

  /**
   * Validate IDs
   */
  if (!mongoose.isValidObjectId(studentId)) {
    throw new AppError(
      "Invalid student ID.",
      400
    );
  }

  if (!mongoose.isValidObjectId(courseId)) {
    throw new AppError(
      "Invalid course ID.",
      400
    );
  }

  /**
   * Ensure student exists
   */
  const student =
    await Student.findById(studentId)
      .session(session);

  if (!student) {
    throw new AppError(
      "Student not found.",
      404
    );
  }

  /**
   * Ensure course exists
   */
  const course =
    await Course.findById(courseId)
      .session(session);

  if (!course) {
    throw new AppError(
      "Course not found.",
      404
    );
  }

  /**
   * Prevent duplicate enrollment
   */
  const existingEnrollment =
    await Enrollment.findOne({
      student: studentId,
      course: courseId,
    }).session(session);

  if (existingEnrollment) {
    throw new AppError(
      "Student is already enrolled in this course.",
      409
    );
  }

  /**
   * Create enrollment
   */
  const enrollments =
    await Enrollment.create(
      [
        {
          student: studentId,
          course: courseId,
          amount,
          status: "pending",
        },
      ],
      {
        session,
      }
    );

  return enrollments[0];

};

/**
 * Create Enrollment For Logged-in Student
 */
export const createEnrollmentForStudent =
  async (
    studentId: string,
    courseId: string
  ) => {

    const course =
      await Course.findById(courseId);

    if (!course) {

      throw new AppError(
        "Course not found.",
        404
      );

    }

    const existingEnrollment =
      await Enrollment.findOne({

        student: studentId,

        course: courseId,

      });

    if (existingEnrollment) {

      return existingEnrollment;

    }

    const enrollment =
      await Enrollment.create({

        student: studentId,

        course: courseId,

        amount: course.price,

        status: "pending",

      });

    return enrollment;

  };

/**
 * Activate Enrollment
 */
export const activateEnrollment = async (
  enrollmentId: string
) => {

  if (!mongoose.isValidObjectId(enrollmentId)) {
    throw new AppError(
      "Invalid enrollment ID.",
      400
    );
  }

  const enrollment =
    await Enrollment.findById(enrollmentId);

  if (!enrollment) {
    throw new AppError(
      "Enrollment not found.",
      404
    );
  }

  /**
   * Already active
   */
  if (enrollment.status === "active") {
    return enrollment;
  }

  /**
   * Activate course access
   */
  enrollment.status = "active";
  enrollment.enrolledAt = new Date();

  await enrollment.save();

  return enrollment;

};

/**
 * Get Student Enrollments
 */
export const getEnrollmentByStudent = async (
  studentId: string
) => {

  if (!mongoose.isValidObjectId(studentId)) {
    throw new AppError(
      "Invalid student ID.",
      400
    );
  }

  return await Enrollment.find({
    student: studentId,
  })
    .populate("course")
    .select("-student")
    .sort({
      createdAt: -1,
    });

};