import Enrollment from "../models/enrollment.model";
import Payment from "../models/payment.model";
import Receipt from "../models/receipt.model";

/**
 * Student Payment History
 */
export const getStudentPaymentHistory = async (
  studentId: string
) => {

  const enrollments = await Enrollment.find({
    student: studentId,
  })
    .populate("course")
    .sort({
      createdAt: -1,
    });

  return Promise.all(

    enrollments.map(async (enrollment: any) => {

      const payment =
        await Payment.findOne({
          enrollment: enrollment._id,
        }).sort({
          createdAt: -1,
        });

      const receipt =
        await Receipt.findOne({
          enrollment: enrollment._id,
        });

      return {

        enrollmentId: enrollment._id,

        course: enrollment.course,

        amount: enrollment.amount,

        enrollmentStatus: enrollment.status,

        paymentStatus:
          payment?.status ?? "pending",

        paymentReference:
          payment?.reference ?? null,

        receipt,

        paidAt:
          payment?.paidAt ?? null,

      };

    })

  );

};

/**
 * Admin Payment History
 */
export const getAllPaymentHistory = async () => {

  const enrollments = await Enrollment.find()
    .populate("student")
    .populate("course")
    .sort({
      createdAt: -1,
    });

  return Promise.all(

    enrollments.map(async (enrollment: any) => {

      const payment =
        await Payment.findOne({
          enrollment: enrollment._id,
        }).sort({
          createdAt: -1,
        });

      const receipt =
        await Receipt.findOne({
          enrollment: enrollment._id,
        });

      return {

        enrollmentId: enrollment._id,

        student: enrollment.student,

        course: enrollment.course,

        amount: enrollment.amount,

        enrollmentStatus: enrollment.status,

        paymentStatus:
          payment?.status ?? "pending",

        paymentReference:
          payment?.reference ?? null,

        receipt,

        paidAt:
          payment?.paidAt ?? null,

      };

    })

  );

};