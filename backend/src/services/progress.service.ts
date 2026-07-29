import Progress from "../models/progress.model";
import Lesson from "../models/lesson.model";
import Module from "../models/module.model";

import AppError from "../utils/AppError";
import { issueCertificate } from "./certificate.service";

export const markLessonCompleted = async (
  studentId: string,
  lessonId: string
) => {

  /**
   * Find Lesson
   */
  const lesson = await Lesson.findById(
    lessonId
  );

  if (!lesson) {
    throw new AppError(
      "Lesson not found.",
      404
    );
  }

  /**
   * Mark lesson completed
   */
  const progress =
    await Progress.findOneAndUpdate(
      {
        student: studentId,
        lesson: lessonId,
      },
      {
        completed: true,
        completedAt: new Date(),
      },
      {
        upsert: true,
        // new: true,
        returnDocument: "after"
      }
    );

  /**
   * Find Module
   */
  const module = await Module.findById(
    lesson.module
  );

  if (!module) {
    return progress;
  }

  /**
   * Calculate Course Progress
   * This will automatically issue
   * certificate when 100%
   */
  const courseProgress =
  await getCourseProgress(
    studentId,
    module.course.toString()
  );

if (
  courseProgress.percentage === 100
) {

  await issueCertificate(
    studentId,
    module.course.toString()
  );

}

  return progress;

};

export const getStudentProgress = async (
  studentId: string,
  moduleId: string
) => {

  const lessons = await Lesson.find({
    module: moduleId,
  });

  const lessonIds = lessons.map(
    lesson => lesson._id
  );

  const completedLessons = await Progress.find({
    student: studentId,
    lesson: {
      $in: lessonIds,
    },
    completed: true,
  });

  const percentage =
    lessons.length === 0
      ? 0
      : Math.round(
          (completedLessons.length / lessons.length) * 100
        );

  return {
    totalLessons: lessons.length,
    completedLessons: completedLessons.length,
    percentage,
  };

};

export const getCourseProgress = async (
  studentId: string,
  courseId: string
) => {

  /**
   * Find every module
   */
  const modules = await Module.find({
    course: courseId,
  });

  const moduleIds = modules.map(
    module => module._id
  );

  /**
   * Find every lesson
   */
  const lessons = await Lesson.find({
    module: {
      $in: moduleIds,
    },
  });

  const lessonIds = lessons.map(
    lesson => lesson._id
  );

  /**
   * Completed lessons
   */
  const completedLessons =
    await Progress.find({

      student: studentId,

      lesson: {
        $in: lessonIds,
      },

      completed: true,

    });

  const percentage =
    lessons.length === 0
      ? 0
      : Math.round(
          (
            completedLessons.length /
            lessons.length
          ) * 100
        );

  return {

    totalLessons:
      lessons.length,

    completedLessons:
      completedLessons.length,

    percentage,

  };

};

export const updateVideoProgress = async (

  studentId: string,

  lessonId: string,

  currentTime: number,

  duration: number

) => {

  const percentage =
    Math.min(
      Math.round(
        (currentTime / duration) * 100
      ),
      100
    );

  const completed =
    percentage >= 95;

  const progress =
    await Progress.findOneAndUpdate(

      {

        student: studentId,

        lesson: lessonId,

      },

      {

        currentTime,

        duration,

        percentage,

        completed,

        lastWatched: new Date(),

      },

      {

        upsert: true,

        new: true,

      }

    );

    if (completed) {

  const lesson =
    await Lesson.findById(lessonId);

  if (lesson) {

    const module =
      await Module.findById(
        lesson.module
      );

    if (module) {

      const courseProgress =
        await getCourseProgress(
          studentId,
          module.course.toString()
        );

      if (
        courseProgress.percentage === 100
      ) {

        await issueCertificate(
          studentId,
          module.course.toString()
        );

      }

    }

  }

}

  return progress;

};
