import Student from "../models/student.model";
import AppError from "../utils/AppError";

/**
 * Get All Students
 */
interface GetStudentsOptions {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
  paymentStatus?: string;
}

export const getAllStudents = async ({
  page = 1,
  limit = 10,
  search = "",
  status,
  paymentStatus,
}: GetStudentsOptions) => {

  const filter: any = {};

  /**
   * Search
   */
  if (search) {

    filter.$or = [

      {
        fullName: {
          $regex: search,
          $options: "i",
        },
      },

      {
        email: {
          $regex: search,
          $options: "i",
        },
      },

      {
        phone: {
          $regex: search,
          $options: "i",
        },
      },

    ];

  }

  /**
   * Status
   */
  if (status) {

    filter.status = status;

  }

  /**
   * Payment Status
   */
  if (paymentStatus) {

    filter.paymentStatus = paymentStatus;

  }

  const total =
    await Student.countDocuments(filter);

  const students =
    await Student.find(filter)

      .select("-password")

      .sort({
        createdAt: -1,
      })

      .skip((page - 1) * limit)

      .limit(limit);

  return {

    students,

    pagination: {

      total,

      page,

      limit,

      totalPages: Math.ceil(total / limit),

      hasNext:
        page < Math.ceil(total / limit),

      hasPrevious:
        page > 1,

    },

  };

};

/**
 * Get Single Student
 */
export const getStudentById = async (
  studentId: string
) => {

  const student = await Student.findById(studentId)
    .select("-password");

  if (!student) {

    throw new AppError(
      "Student not found.",
      404
    );

  }

  return student;

};

/**
 * Update Student
 */
export const updateStudent = async (
  studentId: string,
  data: Partial<any>
) => {

  const student =
    await Student.findByIdAndUpdate(
      studentId,
      data,
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

  if (!student) {

    throw new AppError(
      "Student not found.",
      404
    );

  }

  return student;

};

/**
 * Delete Student
 */
export const deleteStudent = async (
  studentId: string
) => {

  const student =
    await Student.findById(studentId);

  if (!student) {

    throw new AppError(
      "Student not found.",
      404
    );

  }

  await student.deleteOne();

  return {
    message:
      "Student deleted successfully.",
  };

};