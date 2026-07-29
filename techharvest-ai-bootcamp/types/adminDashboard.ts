export interface AdminDashboardStatistics {
   students: number;
  courses: number;
  modules: number;
  lessons: number;
  enrollments: number;
  payments: number;
  certificates: number;
}

export interface AdminDashboardData {
  statistics: AdminDashboardStatistics;
  recentStudents: any[];
  recentEnrollments: any[];
  recentPayments: any[];
}