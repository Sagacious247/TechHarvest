export interface Student {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  occupation: string;
  experience: string;
  paymentStatus: string;
  status: string;
}

export interface Course {
  _id: string;
  title: string;
  description: string;
  thumbnail?: {
  url: string;
  publicId: string;
};
  duration: string;
  level: string;
}

export interface Enrollment {
  _id: string;
  student: string;
  course: Course;
  amount: number;
  status: string;
  paymentStatus: string;
  enrolledAt: string;
}

export interface Module {
  _id: string;
  title: string;
  description: string;
  order: number;
}

export interface Lesson {
  _id: string;
  title: string;
  description: string;
  videoUrl: string;
  notes: string;
  resources: string[];
  duration: number;
  order: number;
  isPreview: boolean;
}

export interface ResumeLearningData {
  enrollment: Enrollment;
  module: Module;
  lesson: Lesson;
}

export interface DashboardStats {
  totalCourses: number;
  completedLessons: number;
  totalLessons: number;
  completionRate: number;
  certificates: number;
}

export interface DashboardData {
  student: Student;
  enrolledCourses: Enrollment[];
  resumeLearning: ResumeLearningData | null;
  stats: DashboardStats;
}
