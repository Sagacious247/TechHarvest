import api from "./api";

import { LearningResponse } from "@/types/learning";

export const getLearningCourse = async (
  courseId: string
): Promise<LearningResponse> => {

  const response = await api.get<{
    success: boolean;
    data: LearningResponse;
  }>(
    `/learning/${courseId}`
  );

  return response.data.data;

};