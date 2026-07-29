import Course from "../models/course.model";
import AppError from "../utils/AppError";
import { checkOwnership } from "../utils/checkOwnership";

interface GetCoursesOptions {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
  category?: string;
  level?: string;
}

/**
 * Get All Courses
 */
export const getAllCourses = async ({
  page = 1,
  limit = 10,
  search = "",
  status,
  category,
  level,
}: GetCoursesOptions) => {
  const filter: any = {};

  /**
   * Search
   */
  if (search) {
    filter.$or = [
      {
        title: {
          $regex: search,
          $options: "i",
        },
      },
      {
        description: {
          $regex: search,
          $options: "i",
        },
      },
      {
        shortDescription: {
          $regex: search,
          $options: "i",
        },
      },
    ];
  }

  /**
   * Status Filter
   */
  if (status) {
    filter.status = status;
  }

  /**
   * Category Filter
   */
  if (category) {
    filter.category = category;
  }

  /**
   * Level Filter
   */
  if (level) {
    filter.level = level;
  }

  const total = await Course.countDocuments(filter);

  const courses = await Course.find(filter)
    .populate("createdBy", "fullName email")
    .populate("instructor", "fullName email")
    .sort({
      createdAt: -1,
    })
    .skip((page - 1) * limit)
    .limit(limit);

  return {
    courses,

    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasNext: page < Math.ceil(total / limit),
      hasPrevious: page > 1,
    },
  };
};

/**
 * Get Single Course
 */
export const getCourseById = async (
  courseId: string
) => {

  const course = await Course.findById(courseId)
    .populate("createdBy", "fullName email")
    .populate("instructor", "fullName email");

  if (!course) {
    throw new AppError(
      "Course not found.",
      404
    );
  }

  return course;
};


/**
 * Create Course
 */
export const createCourse = async (
  data: any,
  adminId: string
) => {
  try {

    const existing = await Course.findOne({
      slug: data.slug,
    });

    if (existing) {
      throw new AppError(
        "Course slug already exists.",
        409
      );
    }

    // const course = await Course.create({
    //   ...data,
    //   createdBy: adminId,
    //   instructor: data.instructor || adminId,
    // });

    const {
    _id,
    createdAt,
    updatedAt,
    enrollmentCount,
    createdBy,
    ...payload
} = data;

const course = await Course.create({
    ...payload,
    createdBy: adminId,
    instructor: payload.instructor || adminId,
});

    return course;

  } 
  catch (error: any) {

    console.log(error);

    if (error.errors) {
      console.log("Validation Errors");
      console.log(error.errors);
    }

    throw error;
  }

};
/**
 * Update Course
 */
export const updateCourse = async (
  courseId: string,
  data: Partial<any>,
  adminId: string,
  role: string
) => {
  const course = await Course.findById(courseId);
  
if (!course) {
  throw new AppError(
    "Course not found.",
    404
  );
}

checkOwnership(
  course.createdBy.toString(),
  adminId,
  role
);

Object.assign(course, data);

await course.save();

return course;

  // const course =
  //   await Course.findByIdAndUpdate(
  //     courseId,
  //     data,
  //     {
  //       new: true,
  //       runValidators: true,
  //     }
  //   );

  // if (!course) {
  //   throw new AppError(
  //     "Course not found.",
  //     404
  //   );
  // }

  // return course;
};

/**
 * Delete Course
 */
export const deleteCourse = async (
    courseId: string,
    adminId: string,
    role: string
) => {

  const course =
    await Course.findById(courseId);

  if (!course) {
    throw new AppError(
      "Course not found.",
      404
    );
  }

  checkOwnership(
    course.createdBy.toString(),
    adminId,
    role
);

  await course.deleteOne();

  return {
    message:
      "Course deleted successfully.",
  };
};


/**
 * -----------------------------------------
 * Publish Course
 * -----------------------------------------
 */
export const publishCourse = async (
    courseId: string,
    adminId: string,
    role: string
) => {

  const course = await Course.findById(courseId);

  if (!course) {
    throw new AppError(
      "Course not found.",
      404
    );
  }

  checkOwnership(
    course.createdBy.toString(),
    adminId,
    role
);

  course.status = "Published";

  await course.save();

  return course;

};

/**
 * -----------------------------------------
 * Feature Course
 * -----------------------------------------
 */
export const featureCourse = async (
    courseId: string,
    adminId: string,
    role: string
) => {

  const course = await Course.findById(courseId);

  if (!course) {
    throw new AppError(
      "Course not found.",
      404
    );
  }

  checkOwnership(
    course.createdBy.toString(),
    adminId,
    role
);

  course.isFeatured = !course.isFeatured;

  await course.save();

  return course;

};