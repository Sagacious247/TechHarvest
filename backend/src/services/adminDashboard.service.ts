// import Student from "../models/student.model";
// import Course from "../models/course.model";
// import Enrollment from "../models/enrollment.model";
// import Certificate from "../models/certificate.model";
// import Payment from "../models/payment.model";
// import Module from "../models/module.model";
// import Lesson from "../models/lesson.model";

// export const getDashboardStatistics = async () => {

//   const [

//     students,
//     courses,
//     modules,
//     lessons,
//     enrollments,
//     certificates,
//     payments,

//     recentStudents,
//     recentEnrollments,
//     recentPayments,

//   ] = await Promise.all([

//     Student.countDocuments(),

//     Course.countDocuments(),

//     Module.countDocuments(),

//     Lesson.countDocuments(),

//     Enrollment.countDocuments(),

//     Certificate.countDocuments(),

//     Payment.countDocuments({
//       status: "success",
//     }),

//     Student.find()
//       .sort({ createdAt: -1 })
//       .limit(5),

//     Enrollment.find()
//       .populate("student")
//       .populate("course")
//       .sort({ createdAt: -1 })
//       .limit(5),

//     Payment.find()
//       .sort({ createdAt: -1 })
//       .limit(5),

//   ]);

//   return {

//     statistics: {

//       students,

//       courses,

//       modules,

//       lessons,

//       enrollments,

//       certificates,

//       payments,

//     },

//     recentStudents,

//     recentEnrollments,

//     recentPayments,

//   };

// };


import Student from "../models/student.model";
import Course from "../models/course.model";
import Enrollment from "../models/enrollment.model";
import Certificate from "../models/certificate.model";
import Payment from "../models/payment.model";
import Module from "../models/module.model";
import Lesson from "../models/lesson.model";

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
      status: "paid",
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
          status: "paid",
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