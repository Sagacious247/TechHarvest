export interface Module {

  _id: string;

  title: string;

  description: string;

  order: number;

  course: string;

  isPublished: boolean;

  createdAt: string;

  updatedAt: string;

}

export interface CreateModuleData {

  title: string;

  description?: string;

  order: number;

  course: string;

}

export interface UpdateModuleData {

  title?: string;

  description?: string;

  order?: number;

  isPublished?: boolean;

}

export interface ReorderModule {

  _id: string;

  order: number;

}