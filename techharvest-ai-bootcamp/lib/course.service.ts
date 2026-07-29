import api from "./api";

import { LearningResponse } from "@/types/learning";

export const getCourseContent = async (
  courseId: string
): Promise<LearningResponse> => {

  const response = await api.get(
    `/courses/${courseId}/content`
  );

  return response.data.data;

};