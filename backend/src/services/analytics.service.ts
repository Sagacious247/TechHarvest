import Student from "../models/student.model";
import Course from "../models/course.model";
import Module from "../models/module.model";
import Lesson from "../models/lesson.model";
import Enrollment from "../models/enrollment.model";
import Payment from "../models/payment.model";
import Certificate from "../models/certificate.model";
import { PAYMENT_STATUS } from "../constants/payment";

export const getAnalytics = async () => {
  const [
    totalStudents,
    activeStudents,

    totalCourses,
    publishedCourses,

    totalModules,

    totalLessons,
    publishedLessons,
    previewLessons,

    totalEnrollments,

    totalCertificates,

    paidPayments,
    pendingPayments,
    failedPayments,

    revenue,

    latestStudents,
    latestPayments,
    latestCertificates,

    topCourses,

    monthlyRevenue,

    monthlyEnrollments,
  ] = await Promise.all([

    Student.countDocuments(),

    Student.countDocuments({
      status: "active",
    }),

    Course.countDocuments(),

    Course.countDocuments({
      isPublished: true,
    }),

    Module.countDocuments(),

    Lesson.countDocuments(),

    Lesson.countDocuments({
      isPublished: true,
    }),

    Lesson.countDocuments({
      isPreview: true,
    }),

    Enrollment.countDocuments(),

    Certificate.countDocuments(),

    Payment.countDocuments({
  status: "success",
}),

    Payment.countDocuments({
      status: "pending",
    }),

    Payment.countDocuments({
      status: "failed",
    }),

    Payment.aggregate([
      {
        $match: {
           status: "success",
        },
      },
      {
        $group: {
          _id: null,
          revenue: {
            $sum: "$amount",
          },
        },
      },
    ]),

    Student.find()
      .sort({
        createdAt: -1,
      })
      .limit(5),

    Payment.find()
      .populate({
        path: "enrollment",
        populate: [
          {
            path: "student",
          },
          {
            path: "course",
          },
        ],
      })
      .sort({
        createdAt: -1,
      })
      .limit(5),

    Certificate.find()
      .populate("student")
      .populate("course")
      .sort({
        createdAt: -1,
      })
      .limit(5),

    Enrollment.aggregate([
      {
        $group: {
          _id: "$course",
          students: {
            $sum: 1,
          },
          revenue: {
            $sum: "$amount",
          },
        },
      },
      {
        $sort: {
          students: -1,
        },
      },
      {
        $limit: 10,
      },
      {
        $lookup: {
          from: "courses",
          localField: "_id",
          foreignField: "_id",
          as: "course",
        },
      },
      {
        $unwind: "$course",
      },
      {
        $project: {
          title: "$course.title",
          students: 1,
          revenue: 1,
        },
      },
    ]),

    Payment.aggregate([
      {
        $match: {
           status: "success",
        },
      },
      {
        $group: {
          _id: {
            month: {
              $month: "$createdAt",
            },
          },
          revenue: {
            $sum: "$amount",
          },
        },
      },
      {
        $sort: {
          "_id.month": 1,
        },
      },
    ]),

    Enrollment.aggregate([
      {
        $group: {
          _id: {
            month: {
              $month: "$createdAt",
            },
          },
          enrollments: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          "_id.month": 1,
        },
      },
    ]),

  ]);

  return {

    overview: {

      students: totalStudents,

      activeStudents,

      courses: totalCourses,

      publishedCourses,

      modules: totalModules,

      lessons: totalLessons,

      publishedLessons,

      previewLessons,

      enrollments: totalEnrollments,

      certificates: totalCertificates,

      revenue:
        revenue.length
          ? revenue[0].revenue
          : 0,

      paidPayments,

      pendingPayments,

      failedPayments,

    },

    revenue: monthlyRevenue,

    enrollments: monthlyEnrollments,

    topCourses,

    latestStudents,

    latestPayments,

    latestCertificates,

  };

};