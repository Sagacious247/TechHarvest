export interface LearningProgress {

  currentTime: number;

  percentage: number;

  completed: boolean;

  lastWatched: string | null;

}

export interface LearningResource {

  name: string;

  url: string;

}

export interface LearningLesson {

  _id: string;

  title: string;

  description: string;

  video: {

    url: string;

    publicId: string;

  };

  notes: string;

  resources: LearningResource[];

  duration: number;

  order: number;

  isPreview: boolean;

  isPublished: boolean;

  progress?: LearningProgress;

}

export interface LearningModule {

  _id: string;

  title: string;

  description: string;

  order: number;

  lessons: LearningLesson[];

}

export interface LearningCourse {

  _id: string;

  title: string;

  description: string;

  thumbnail: {

    url: string;

    publicId: string;

  };

  duration: string;

  level: string;

}

export interface LearningResponse {

  course: LearningCourse;

  modules: LearningModule[];

}