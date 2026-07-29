import mongoose from "mongoose";
import Module from "../models/module.model";
import Course from "../models/course.model";
import AppError from "../utils/AppError";
import { checkOwnership } from "../utils/checkOwnership";

interface CreateModuleInput {
  title: string;
  description?: string;
  order: number;
  course: string;
}

/**
 * Create Module
 */
// export const createModule = async (
//   data: CreateModuleInput
// ) => {

//   if (!mongoose.isValidObjectId(data.course)) {
//     throw new AppError(
//       "Invalid course ID.",
//       400
//     );
//   }

//   const course = await Course.findById(data.course);

//   if (!course) {
//     throw new AppError(
//       "Course not found.",
//       404
//     );
//   }

//   const module = await Module.create(data);

//   return module;

// };

export const createModule = async (
  data: CreateModuleInput,
  adminId: string
) => {

  if (!mongoose.isValidObjectId(data.course)) {
    throw new AppError(
      "Invalid course ID.",
      400
    );
  }

  const course = await Course.findById(data.course);

  if (!course) {
    throw new AppError(
      "Course not found.",
      404
    );
  }

  const module = await Module.create({
    ...data,
    createdBy: adminId,
  });

  return module;

};
/**
 * Get Modules By Course
 */
export const getModulesByCourse = async (
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

  return await Module.find({
    course: courseId,
  }).sort({
    order: 1,
  });

};

/**
 * Get Single Module
 */
export const getModuleById = async (
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

  return module;

};

/**
 * Update Module
 */
// export const updateModule = async (
//   moduleId: string,
//   data: Partial<CreateModuleInput>
// ) => {

//   if (!mongoose.isValidObjectId(moduleId)) {

//     throw new AppError(
//       "Invalid module ID.",
//       400
//     );

//   }

//   const module = await Module.findByIdAndUpdate(
//     moduleId,
//     data,
//     {
//       new: true,
//       runValidators: true,
//     }
//   );

//   if (!module) {

//     throw new AppError(
//       "Module not found.",
//       404
//     );

//   }

//   return module;

// };


export const updateModule = async (
  moduleId: string,
  data: Partial<CreateModuleInput>,
  adminId: string,
  role: string
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

  checkOwnership(
    module.createdBy.toString(),
    adminId,
    role
  );

  Object.assign(module, data);

  await module.save();

  return module;

};

/**
 * Delete Module
 */
// export const deleteModule = async (
//   moduleId: string
// ) => {

//   if (!mongoose.isValidObjectId(moduleId)) {

//     throw new AppError(
//       "Invalid module ID.",
//       400
//     );

//   }

//   const module = await Module.findById(moduleId);

//   if (!module) {

//     throw new AppError(
//       "Module not found.",
//       404
//     );

//   }

//   await module.deleteOne();

//   return {

//     message: "Module deleted successfully."

//   };

// };


export const deleteModule = async (
  moduleId: string,
  adminId: string,
  role: string
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

  checkOwnership(
    module.createdBy.toString(),
    adminId,
    role
  );

  await module.deleteOne();

  return {

    message: "Module deleted successfully."

  };

};
/**
 * Reorder Modules
 */
export const reorderModules = async (

  modules: {

    _id: string;

    order: number;

  }[]

) => {

  const operations = modules.map((module) => ({

    updateOne: {

      filter: {

        _id: module._id,

      },

      update: {

        order: module.order,

      },

    },

  }));

  await Module.bulkWrite(operations);

  return {

    message: "Modules reordered successfully.",

  };

};
