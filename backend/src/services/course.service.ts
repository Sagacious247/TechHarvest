import Course from "../models/course.model";
import Module from "../models/module.model";
import Lesson from "../models/lesson.model";
import AppError from "../utils/AppError";
import mongoose from "mongoose";
import Enrollment from "../models/enrollment.model";
import Progress from "../models/progress.model";
import Certificate from "../models/certificate.model";


/**
 * -----------------------------------------
 * Create Course
 * -----------------------------------------
 */
export const createCourse = async (data: {
  title: string;
  description: string;
  price: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  thumbnail?: {
  url: string;
  publicId: string;
};
}) => {

  const existingCourse = await Course.findOne({
    title: data.title,
  });

  if (existingCourse) {
    throw new AppError(
      "A course with this title already exists.",
      409
    );
  }

  return Course.create(data);

};

/**
 * -----------------------------------------
 * Public Courses
 * Only Published Courses
 * -----------------------------------------
 */
export const getAllCourses = async () => {

  return await Course.find({
    status: "Published",
  })
    .select(
`
title
slug
shortDescription
description
price
duration
level
category
thumbnail
isFeatured
`
)
    .sort({
      createdAt: -1,
    });

};

/**
 * -----------------------------------------
 * Public Course Details
 * -----------------------------------------
 */
export const getCourseById = async (
  id: string
) => {

  const course = await Course.findOne({
  _id: id,
  status: "Published",
});

  if (!course) {

    throw new AppError(
      "Course not found.",
      404
    );

  }

  const modules = await Module.find({
    course: id,
    status: "Published"
  }).sort({
    order: 1,
  });

  const curriculum = await Promise.all(

    modules.map(async (module) => {

      // const lessonCount =
      //   await Lesson.countDocuments({

      //     module: module._id,

      //     status:"Published"

      //   });

      // return {
      //   _id: module._id,
      //   title: module.title,
      //   description:
      //     module.description,
      //   order: module.order,
      //   totalLessons:
      //     lessonCount,
      // };

      const lessons = await Lesson.find({
  module: module._id,
  isPublished: true,
})
.select(`
title
duration
isPreview
order
`)
.sort({
  order: 1,
});

return {
  _id: module._id,
  title: module.title,
  description: module.description,
  order: module.order,

  totalLessons: lessons.length,

  lessons,
};

    })

  );

  const totalLessons =
    curriculum.reduce(
      (sum, module) =>
        sum + module.lessons.length,
      0
    );

  return {

    course,

    totalModules:
      curriculum.length,

    totalLessons,

    curriculum,

  };

};


/**
 * -----------------------------------------
 * Publish Course
 * -----------------------------------------
 */

export const publishCourse = async (
  courseId: string
) => {

  const course = await Course.findById(courseId);

  if (!course) {
    throw new AppError(
      "Course not found.",
      404
    );
  }

  // Find published modules

  const modules = await Module.find({
    course: courseId,
    isPublished: true,
  });

  if (!modules.length) {

    throw new AppError(
      "Cannot publish course. Publish at least one module first.",
      400
    );

  }

  // Find published lessons

  const moduleIds = modules.map(
    (m) => m._id
  );

  const lessonCount =
    await Lesson.countDocuments({

      module: {
        $in: moduleIds,
      },

      isPublished: true,

    });

  if (!lessonCount) {

    throw new AppError(
      "Cannot publish course. Publish at least one lesson first.",
      400
    );

  }

  course.status = "Published";

  await course.save();

  return course;

};