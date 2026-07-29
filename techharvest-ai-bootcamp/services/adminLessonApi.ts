// import api from "@/lib/api";
import api from "@/lib/adminApi";

import {
  Lesson,
  CreateLessonData,
  UpdateLessonData,
} from "@/types/lesson";

/**
 * Get Lessons By Module
 */
export async function getLessons(
  moduleId: string
): Promise<Lesson[]> {

  const response = await api.get(
    `/lessons/module/${moduleId}`
  );

  return response.data.data;
}

/**
 * Get Single Lesson
 */
export async function getLesson(
  id: string
): Promise<Lesson> {

  const response = await api.get(
    `/lessons/${id}`
  );

  return response.data.data;
}

/**
 * Create Lesson
 */
export async function createLesson(
  data: CreateLessonData
): Promise<Lesson> {

  const response = await api.post(
    "/lessons",
    data
  );

  return response.data.data;
}

/**
 * Update Lesson
 */
export async function updateLesson(
  id: string,
  data: UpdateLessonData
): Promise<Lesson> {

  const response = await api.put(
    `/lessons/${id}`,
    data
  );

  return response.data.data;
}

/**
 * Delete Lesson
 */
export async function deleteLesson(
  id: string
): Promise<void> {

  await api.delete(
    `/lessons/${id}`
  );

}

/**
 * Publish / Unpublish Lesson
 */
export async function publishLesson(
  id: string
): Promise<Lesson> {

  const response = await api.patch(
    `/lessons/${id}/publish`
  );

  return response.data.data;
}