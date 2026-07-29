import mongoose from "mongoose";

import Course from "../models/course.model";
import Module from "../models/module.model";
import Lesson from "../models/lesson.model";

import AppError from "../utils/AppError";

export const getModuleDashboard = async (
  courseId: string
) => {

  if (!mongoose.isValidObjectId(courseId)) {
    throw new AppError(
      "Invalid course id.",
      400
    );
  }

  const course =
    await Course.findById(courseId);

  if (!course) {
    throw new AppError(
      "Course not found.",
      404
    );
  }

  const modules =
    await Module.find({
      course: courseId,
    }).sort({
      order: 1,
    });

  const moduleIds =
    modules.map(
      module => module._id
    );

  const totalLessons =
    await Lesson.countDocuments({
      module: {
        $in: moduleIds,
      },
    });

  const publishedModules =
    modules.filter(
      module => module.isPublished
    ).length;

  const draftModules =
    modules.length -
    publishedModules;

  return {

    course,

    statistics: {

      totalModules:
        modules.length,

      totalLessons,

      publishedModules,

      draftModules,

    },

    modules,

  };

};