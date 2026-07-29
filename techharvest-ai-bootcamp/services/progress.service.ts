// import api from "@/lib/api";
import api from "@/lib/studentApi";

export interface UpdateProgressData {
  lessonId: string;
  currentTime: number;
  duration: number;
}

export const updateVideoProgress = async (
  data: UpdateProgressData
) => {
  const response = await api.post(
    "/progress/update",
    data
  );

  return response.data.data;
};

export const completeLesson = async (
  lessonId: string
) => {
  const response = await api.post(
    `/progress/lesson/${lessonId}/complete`
  );

  return response.data.data;
};

export const getModuleProgress = async (
  moduleId: string
) => {
  const response = await api.get(
    `/progress/module/${moduleId}`
  );

  return response.data.data;
};