// export interface OverviewStatistics {
//   students: number;
//   activeStudents: number;

//   courses: number;
//   publishedCourses: number;

//   modules: number;

//   lessons: number;
//   publishedLessons: number;
//   previewLessons: number;

//   enrollments: number;

//   certificates: number;

//   revenue: number;

//   paidPayments: number;
//   pendingPayments: number;
//   failedPayments: number;
// }

// export interface RevenueItem {
//   _id: {
//     month: number;
//   };
//   revenue: number;
// }

// export interface EnrollmentItem {
//   _id: {
//     month: number;
//   };
//   enrollments: number;
// }

// export interface TopCourse {
//   title: string;
//   students: number;
//   revenue: number;
// }

// export interface AnalyticsData {
//   overview: OverviewStatistics;

//   revenue: RevenueItem[];

//   enrollments: EnrollmentItem[];

//   topCourses: TopCourse[];

//   latestStudents: any[];

//   latestPayments: any[];

//   latestCertificates: any[];
// }

export interface TopCourse {
  title: string;
  students: number;
  revenue: number;
}

export interface AnalyticsData {
  overview: {
    students: number;
    activeStudents: number;

    courses: number;
    publishedCourses: number;

    modules: number;

    lessons: number;
    publishedLessons: number;
    previewLessons: number;

    enrollments: number;

    certificates: number;

    revenue: number;

    paidPayments: number;
    pendingPayments: number;
    failedPayments: number;
  };

  revenue: any[];

  enrollments: any[];

  topCourses: TopCourse[];

  latestStudents: any[];

  latestPayments: any[];

  latestCertificates: any[];
}