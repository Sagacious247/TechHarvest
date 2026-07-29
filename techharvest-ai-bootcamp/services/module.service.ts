import api from "@/lib/api";

import {

  Module,

  CreateModuleData,

  UpdateModuleData,

  ReorderModule,

} from "@/types/module";

/**
 * Get Modules By Course
 */
export const getModules = async (
  courseId: string
) => {

  const response = await api.get<{

    success: boolean;

    data: Module[];

  }>(`/modules/course/${courseId}`);

  return response.data.data;

};

/**
 * Create Module
 */
export const createModule = async (
  data: CreateModuleData
) => {

  const response = await api.post(
    "/modules",
    data
  );

  return response.data.data;

};

/**
 * Update Module
 */
export const updateModule = async (
  moduleId: string,
  data: UpdateModuleData
) => {

  const response = await api.patch(
    `/modules/${moduleId}`,
    data
  );

  return response.data.data;

};

/**
 * Delete Module
 */
export const deleteModule = async (
  moduleId: string
) => {

  const response = await api.delete(
    `/modules/${moduleId}`
  );

  return response.data;

};

/**
 * Reorder Modules
 */
export const reorderModules = async (
  modules: ReorderModule[]
) => {

  const response = await api.patch(
    "/modules/reorder",
    {
      modules,
    }
  );

  return response.data;

};