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
};
  trailerVideo?: string;
  learningObjectives: string[];
  requirements: string[];
  targetAudience: string[];
  createdBy:
  | string
  | {
      _id: string;
      fullName?: string;
      email?: string;
    };

instructor:
  | string
  | {
      _id: string;
      fullName?: string;
      email?: string;
    };
  status:
    | "Draft"
    | "Published"
    | "Archived";

  isFeatured: boolean;

    /** NEW (Optional) */
  moduleCount?: number;

  /** NEW (Optional) */
  lessonCount?: number;

  /** NEW (Optional) */
  publishedModuleCount?: number;

  enrollmentCount: number;

  createdAt: string;

  updatedAt: string;

}

export interface CourseDetails {

  course: Course;

  totalModules: number;

  totalLessons: number;

  curriculum: any[];

}