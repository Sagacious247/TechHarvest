// import api from "@/lib/api";
import api from "@/lib/adminApi";

import {
  Module,
  CreateModuleData,
  UpdateModuleData,
  ReorderModule,
} from "@/types/module";

/**
 * Get Modules By Course
 */
export async function getModules(
  courseId: string
): Promise<Module[]> {

  const response = await api.get(
    `/modules/course/${courseId}`
  );

  return response.data.data;
}

/**
 * Get Single Module
 */
export async function getModule(
  id: string
): Promise<Module> {

  const response = await api.get(
    `/modules/${id}`
  );

  return response.data.data;
}

/**
 * Create Module
 */
export async function createModule(
  data: CreateModuleData
): Promise<Module> {

  const response = await api.post(
    "/modules",
    data
  );

  return response.data.data;
}

/**
 * Update Module
 */
export async function updateModule(
  id: string,
  data: UpdateModuleData
): Promise<Module> {

  const response = await api.patch(
    `/modules/${id}`,
    data
  );

  return response.data.data;
}

/**
 * Delete Module
 */
export async function deleteModule(
  id: string
): Promise<void> {

  await api.delete(
    `/modules/${id}`
  );

}

/**
 * Reorder Modules
 */
export async function reorderModules(
  modules: ReorderModule[]
): Promise<void> {

  await api.patch(
    "/modules/reorder",
    {
      modules,
    }
  );

}