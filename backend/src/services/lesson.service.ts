import mongoose from "mongoose";
import Lesson from "../models/lesson.model";
import Module from "../models/module.model";
import AppError from "../utils/AppError";
import { checkOwnership } from "../utils/checkOwnership";

interface CreateLessonInput {
  title: string;
  description?: string;
  video: {
  url: string;
  publicId: string;
};
  notes?: string;
  resources?: {
  name: string;
  url: string;
}[];
  duration: number;
  order: number;
  isPreview?: boolean;
  module: string;
}

/**
 * Create Lesson
 */
// export const createLesson = async (
//   data: CreateLessonInput
// ) => {

//   if (!mongoose.isValidObjectId(data.module)) {
//     throw new AppError(
//       "Invalid module ID.",
//       400
//     );
//   }

//   const module = await Module.findById(data.module);

//   if (!module) {
//     throw new AppError(
//       "Module not found.",
//       404
//     );
//   }

//   const lesson = await Lesson.create(data);

//   return lesson;

// };

export const createLesson = async (
  data: CreateLessonInput,
  adminId: string
) => {

  if (!mongoose.isValidObjectId(data.module)) {
    throw new AppError(
      "Invalid module ID.",
      400
    );
  }

  const module = await Module.findById(data.module);

  if (!module) {
    throw new AppError(
      "Module not found.",
      404
    );
  }

  const lesson = await Lesson.create({

    ...data,

    createdBy: adminId,

  });

  return lesson;

};
/**
 * Get Lessons By Module
 */
export const getLessonsByModule = async (
  moduleId: string
) => {

  if (!mongoose.isValidObjectId(moduleId)) {
    throw new AppError(
      "Invalid module ID.",
      400
    );
  }

  const module = await Module.findById(moduleId);

  if (!module) {
    throw new AppError(
      "Module not found.",
      404
    );
  }

  return await Lesson.find({
    module: moduleId,
  }).sort({
    order: 1,
  });

};

/**
 * Get Lesson By ID
 */
export const getLessonById = async (
  lessonId: string
) => {

  if (!mongoose.isValidObjectId(lessonId)) {
    throw new AppError(
      "Invalid lesson ID.",
      400
    );
  }

  const lesson = await Lesson.findById(lessonId);

  if (!lesson) {
    throw new AppError(
      "Lesson not found.",
      404
    );
  }

  return lesson;

};

/**
 * Update Lesson
 */
// export const updateLesson = async (
//   lessonId: string,
//   data: Partial<CreateLessonInput>
// ) => {

//   if (!mongoose.isValidObjectId(lessonId)) {
//     throw new AppError(
//       "Invalid lesson ID.",
//       400
//     );
//   }

//   const lesson =
//     await Lesson.findByIdAndUpdate(
//       lessonId,
//       data,
//       {
//         new: true,
//         runValidators: true,
//       }
//     );

//   if (!lesson) {
//     throw new AppError(
//       "Lesson not found.",
//       404
//     );
//   }

//   return lesson;

// };


export const updateLesson = async (
  lessonId: string,
  data: Partial<CreateLessonInput>,
  adminId: string,
  role: string
) => {

  if (!mongoose.isValidObjectId(lessonId)) {

    throw new AppError(
      "Invalid lesson ID.",
      400
    );

  }

  const lesson =
    await Lesson.findById(lessonId);

  if (!lesson) {

    throw new AppError(
      "Lesson not found.",
      404
    );

  }

  checkOwnership(

    lesson.createdBy.toString(),

    adminId,

    role

  );

  Object.assign(
    lesson,
    data
  );

  await lesson.save();

  return lesson;

};
/**
 * Delete Lesson
 */
// export const deleteLesson = async (
//   lessonId: string
// ) => {

//   if (!mongoose.isValidObjectId(lessonId)) {
//     throw new AppError(
//       "Invalid lesson ID.",
//       400
//     );
//   }

//   const lesson =
//     await Lesson.findById(lessonId);

//   if (!lesson) {
//     throw new AppError(
//       "Lesson not found.",
//       404
//     );
//   }

//   await lesson.deleteOne();

//   return {

//     message:
//       "Lesson deleted successfully.",

//   };

// };


export const deleteLesson = async (
  lessonId: string,
  adminId: string,
  role: string
) => {

  if (!mongoose.isValidObjectId(lessonId)) {

    throw new AppError(
      "Invalid lesson ID.",
      400
    );

  }

  const lesson =
    await Lesson.findById(lessonId);

  if (!lesson) {

    throw new AppError(
      "Lesson not found.",
      404
    );

  }

  checkOwnership(

    lesson.createdBy.toString(),

    adminId,

    role

  );

  await lesson.deleteOne();

  return {

    message:
      "Lesson deleted successfully.",

  };

};
/**
 * Publish / Unpublish Lesson
 */

export const publishLesson = async (
  lessonId: string,
  adminId: string,
  role: string
) => {

  if (!mongoose.isValidObjectId(lessonId)) {

    throw new AppError(
      "Invalid lesson ID.",
      400
    );

  }

  const lesson =
    await Lesson.findById(lessonId);

  if (!lesson) {

    throw new AppError(
      "Lesson not found.",
      404
    );

  }

  checkOwnership(

    lesson.createdBy.toString(),

    adminId,

    role

  );

  lesson.isPublished =
    !lesson.isPublished;

  await lesson.save();

  return lesson;

};
// export const publishLesson = async (
//   lessonId: string
// ) => {

//   if (!mongoose.isValidObjectId(lessonId)) {
//     throw new AppError(
//       "Invalid lesson ID.",
//       400
//     );
//   }

//   const lesson =
//     await Lesson.findById(lessonId);

//   if (!lesson) {
//     throw new AppError(
//       "Lesson not found.",
//       404
//     );
//   }

//   lesson.isPublished =
//     !lesson.isPublished;

//   await lesson.save();

//   return lesson;

// };