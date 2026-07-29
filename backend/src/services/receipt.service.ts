import Receipt from "../models/receipt.model";
import Enrollment from "../models/enrollment.model";
import Course from "../models/course.model";
import Student from "../models/student.model";

import AppError from "../utils/AppError";
import { generateReceiptNumber } from "../utils/generateReceiptNumber";

/**
 * -----------------------------------------
 * Generate Receipt
 * -----------------------------------------
 */
export const createReceipt = async (
  enrollmentId: string,
  paymentReference: string
) => {

  /**
   * Find Enrollment
   */
  const enrollment = await Enrollment.findById(enrollmentId);

  if (!enrollment) {
    throw new AppError(
      "Enrollment not found.",
      404
    );
  }

  /**
   * Prevent Duplicate Receipt
   */
  const existingReceipt =
    await Receipt.findOne({
      enrollment: enrollment._id,
    });

  if (existingReceipt) {
    return existingReceipt;
  }

  /**
   * Ensure Course Exists
   */
  const course =
    await Course.findById(
      enrollment.course
    );

  if (!course) {
    throw new AppError(
      "Course not found.",
      404
    );
  }

  /**
   * Ensure Student Exists
   */
  const student =
    await Student.findById(
      enrollment.student
    );

  if (!student) {
    throw new AppError(
      "Student not found.",
      404
    );
  }

  /**
   * Generate Receipt Number
   */
  const receiptNumber =
    await generateReceiptNumber();

  /**
   * Create Receipt
   */
  const receipt =
    await Receipt.create({

      receiptNumber,

      student: student._id,

      course: course._id,

      enrollment: enrollment._id,

      amount: enrollment.amount,

      currency: "NGN",

      paymentMethod: "Paystack",

      paymentReference,

      status: "paid",

      issuedAt: new Date(),

    });

  return receipt;

};

/**
 * -----------------------------------------
 * Student Receipts
 * -----------------------------------------
 */
export const getStudentReceipts =
  async (
    studentId: string
  ) => {

    return Receipt.find({

      student: studentId,

    })
      .populate(
        "course",
        "title thumbnail"
      )
      .sort({
        createdAt: -1,
      });

  };

/**
 * -----------------------------------------
 * Single Receipt
 * -----------------------------------------
 */
export const getReceiptById =
  async (
    receiptId: string
  ) => {

    const receipt =
      await Receipt.findById(
        receiptId
      )
        .populate(
          "student",
          "fullName email"
        )
        .populate(
          "course",
          "title"
        );

    if (!receipt) {

      throw new AppError(
        "Receipt not found.",
        404
      );

    }

    return receipt;

  };

/**
 * -----------------------------------------
 * Admin
 * View All Receipts
 * -----------------------------------------
 */
export const getAllReceipts =
  async () => {

    return Receipt.find()
      .populate(
        "student",
        "fullName email"
      )
      .populate(
        "course",
        "title"
      )
      .sort({
        createdAt: -1,
      });

  };

  