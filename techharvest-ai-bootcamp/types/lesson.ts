export interface Lesson {
  _id: string;

  title: string;

  description: string;

  video: {
    url: string;
    publicId: string;
  };

  notes: string;

  resources: {
    name: string;
    url: string;
  }[];

  duration: number;

  order: number;

  isPreview: boolean;

  isPublished: boolean;

  module: string;

  createdAt: string;

  updatedAt: string;
}

export interface CreateLessonData {
  title: string;

  description?: string;

  video: {
    url: string;
    publicId: string;
  };

  notes?: string;

  resources?: {
    name: string;
    url: string;
  }[];

  duration: number;

  order: number;

  isPreview?: boolean;

  module: string;
}

export interface UpdateLessonData {
  title?: string;

  description?: string;

  video?: {
    url: string;
    publicId: string;
  };

  notes?: string;

  resources?: {
    name: string;
    url: string;
  }[];

  duration?: number;

  order?: number;

  isPreview?: boolean;

  isPublished?: boolean;
}