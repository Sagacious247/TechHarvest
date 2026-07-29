export interface Course {
  _id: string;

  title: string;

  slug: string;

  shortDescription: string;

  description: string;

  price: number;

  duration: string;

  level:
    | "Beginner"
    | "Intermediate"
    | "Advanced";

  category: string;

  thumbnail: {
    url: string;
    publicId: string;
}

  status:
    | "Draft"
    | "Published"
    | "Archived";

  isFeatured: boolean;

  learningObjectives: string[];

  requirements: string[];

  targetAudience: string[];

  instructor?: {
    _id: string;
    fullName: string;
    email: string;
  };

  createdBy?: {
    _id: string;
    fullName: string;
    email: string;
  };

  createdAt: string;

  updatedAt: string;
}

export interface CoursePagination {

  total: number;

  page: number;

  limit: number;

  totalPages: number;

  hasNext: boolean;

  hasPrevious: boolean;

}

export interface CourseResponse {

  success: boolean;

  data: Course[];

  pagination: CoursePagination;

}