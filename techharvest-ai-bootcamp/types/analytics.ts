export interface TopCourse {
  title: string;
  students: number;
  revenue: number;
}

export interface OverviewStatistics {
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
}

export interface AnalyticsData {
  overview: OverviewStatistics;

  revenue: any[];

  enrollments: any[];

  topCourses: TopCourse[];

  latestStudents: any[];

  latestPayments: any[];

  latestCertificates: any[];
}