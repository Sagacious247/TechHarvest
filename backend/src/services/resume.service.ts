import Enrollment from "../models/enrollment.model";
import Module from "../models/module.model";
import Lesson from "../models/lesson.model";
import Progress from "../models/progress.model";

export const getResumeLesson = async (
  studentId: string
) => {

  /**
   * Find student's enrollment
   * and populate the course.
   */
  const enrollment = await Enrollment.findOne({
    student: studentId,
  }).populate("course");

  if (!enrollment || !enrollment.course) {
  return null;
}

  /**
   * TypeScript still believes
   * enrollment.course is an ObjectId
   * even after populate().
   */
  const populatedCourse = enrollment.course as any;

  /**
   * Get all modules
   */
  const modules = await Module.find({
    course: populatedCourse._id,
  }).sort({
    order: 1,
  });

  for (const module of modules) {

    const lessons = await Lesson.find({
      module: module._id,
    }).sort({
      order: 1,
    });

    for (const lesson of lessons) {

      const progress = await Progress.findOne({
        student: studentId,
        lesson: lesson._id,
      });

      if (!progress || !progress.completed) {

        return {

          enrollment,

          module,

          lesson,

        };

      }

    }

  }

  /**
   * Student has completed every lesson.
   */
  return null;

};