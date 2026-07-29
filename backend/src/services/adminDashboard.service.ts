import Student from "../models/student.model";
import Course from "../models/course.model";
import Enrollment from "../models/enrollment.model";
import Certificate from "../models/certificate.model";
import Payment from "../models/payment.model";
import Module from "../models/module.model";
import Lesson from "../models/lesson.model";
import { PAYMENT_STATUS } from "../constants/payment";

export const getDashboardStatistics = async () => {

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

    recentStudents,
    recentEnrollments,
    recentPayments,

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
  status: PAYMENT_STATUS.SUCCESS,
}),

    Payment.countDocuments({
  status: PAYMENT_STATUS.PENDING,
}),

    Payment.countDocuments({
  status: PAYMENT_STATUS.FAILED,
}),

    Payment.aggregate([
      {
        $match: {
  status: PAYMENT_STATUS.SUCCESS,
},
      },
      {
        $group: {
          _id: null,
          total: {
            $sum: "$amount",
          },
        },
      },
    ]),

    Student.find()
      .sort({ createdAt: -1 })
      .limit(5),

    Enrollment.find()
      .populate("student")
      .populate("course")
      .sort({ createdAt: -1 })
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

  ]);

  return {

    statistics: {

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

      paidPayments,

      pendingPayments,

      failedPayments,

      revenue:
        revenue.length > 0
          ? revenue[0].total
          : 0,

    },

    recentStudents,

    recentEnrollments,

    recentPayments,

  };

};