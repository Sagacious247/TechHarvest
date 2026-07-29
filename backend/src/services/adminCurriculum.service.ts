import mongoose from "mongoose";

import Course from "../models/course.model";
import Module from "../models/module.model";
import Lesson from "../models/lesson.model";

import AppError from "../utils/AppError";

export const getCurriculumByCourse = async (
  courseId: string
) => {

  if (!mongoose.isValidObjectId(courseId)) {
    throw new AppError(
      "Invalid course ID.",
      400
    );
  }

  const course = await Course.findById(courseId);

  if (!course) {
    throw new AppError(
      "Course not found.",
      404
    );
  }

  const modules = await Module.find({
    course: courseId,
  }).sort({
    order: 1,
  });

  const curriculum = await Promise.all(

    modules.map(async (module) => {

      const lessons = await Lesson.find({
        module: module._id,
      }).sort({
        order: 1,
      });

      return {

        ...module.toObject(),

        lessons,

      };

    })

  );

  const totalLessons =
    curriculum.reduce(

      (total, module) =>

        total + module.lessons.length,

      0

    );

  const publishedLessons =
    curriculum.reduce(

      (total, module) =>

        total +

        module.lessons.filter(
          lesson => lesson.isPublished
        ).length,

      0

    );

  return {

    course,

    statistics: {

      totalModules: modules.length,

      totalLessons,

      publishedLessons,

      draftLessons:
        totalLessons - publishedLessons,

    },

    modules: curriculum,

  };

};