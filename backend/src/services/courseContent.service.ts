import Course from "../models/course.model";
import Module from "../models/module.model";
import Lesson from "../models/lesson.model";
import AppError from "../utils/AppError";

export const getCourseContent = async (
  courseId: string
) => {

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

  const modulesWithLessons = await Promise.all(

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

  return {

    course,

    modules: modulesWithLessons,

  };

};