import Course from "../models/course.model";
import Module from "../models/module.model";
import Lesson from "../models/lesson.model";
import Progress from "../models/progress.model";
import Enrollment from "../models/enrollment.model";
import AppError from "../utils/AppError";

export const getLearningCourse = async (
  courseId: string,
  studentId: string
) => {

  /**
   * Ensure the course exists
   */
  const course = await Course.findById(courseId);

  if (!course) {
    throw new AppError(
      "Course not found.",
      404
    );
  }

  /**
   * Ensure the student owns this course
   */
  const enrollment = await Enrollment.findOne({
    student: studentId,
    course: courseId,
  });

  if (!enrollment) {
    throw new AppError(
      "You are not enrolled in this course.",
      403
    );
  }

  /**
   * Load all modules
   */
  const modules = await Module.find({
    course: courseId,
    isPublished: true,
  }).sort({
    order: 1,
  });

  /**
   * Load lessons with progress
   */
  const modulesWithLessons = await Promise.all(

    modules.map(async (module) => {

      const lessons = await Lesson.find({
        module: module._id,
        isPublished: true,
      }).sort({
        order: 1,
      });

      const lessonsWithProgress =
        await Promise.all(

          lessons.map(async (lesson) => {

            const progress =
              await Progress.findOne({
                student: studentId,
                lesson: lesson._id,
              });

            return {

              ...lesson.toObject(),

              progress: progress
                ? {
                    currentTime:
                      progress.currentTime,
                    percentage:
                      progress.percentage,
                    completed:
                      progress.completed,
                    lastWatched:
                      progress.lastWatched,
                  }
                : {
                    currentTime: 0,
                    percentage: 0,
                    completed: false,
                    lastWatched: null,
                  },

            };

          })

        );

      return {

        ...module.toObject(),

        lessons: lessonsWithProgress,

      };

    })

  );

  return {

    course,

    modules: modulesWithLessons,

  };

};