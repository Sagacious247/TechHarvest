import Enrollment from "../models/enrollment.model";
import Student from "../models/student.model";
import Progress from "../models/progress.model";
import Lesson from "../models/lesson.model";
import AppError from "../utils/AppError";
import { getResumeLesson } from "./resume.service";

export const getStudentDashboard = async (
  studentId: string
) => {

  /**
   * ----------------------------------------
   * Verify Student Exists
   * ----------------------------------------
   */
  const student = await Student.findById(studentId)
    .select("-password");

  if (!student) {
    throw new AppError(
      "Student not found.",
      404
    );
  }

  /**
   * ----------------------------------------
   * Get Student Enrollments
   * Populate Course
   * ----------------------------------------
   */
  const enrollments = await Enrollment.find({
  student: studentId,
  status: "active",
}).populate("course");

  /**
   * ----------------------------------------
   * Remove Broken Enrollments
   * (Course deleted but enrollment remains)
   * ----------------------------------------
   */
  const validEnrollments = enrollments.filter(
    (enrollment) => enrollment.course
  );

  /**
   * ----------------------------------------
   * Learning Statistics
   * ----------------------------------------
   */
  const completedLessons =
    await Progress.countDocuments({
      student: studentId,
      completed: true,
    });

  const totalLessons =
    await Lesson.countDocuments();

  const completionRate =
    totalLessons === 0
      ? 0
      : Math.round(
          (completedLessons / totalLessons) * 100
        );

  /**
   * ----------------------------------------
   * Resume Learning
   * Only if the student owns a course
   * ----------------------------------------
   */
  let resumeLearning = null;

  if (validEnrollments.length > 0) {
    resumeLearning =
      await getResumeLesson(studentId);
  }

  /**
   * ----------------------------------------
   * Dashboard Response
   * ----------------------------------------
   */
  return {

    student,

    enrolledCourses:
      validEnrollments,

    resumeLearning,

    stats: {

      totalCourses:
        validEnrollments.length,

      completedLessons,

      totalLessons,

      completionRate,

      certificates: 0,

    },

  };

};