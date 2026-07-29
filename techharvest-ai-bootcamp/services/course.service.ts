// import api from "@/lib/api";
import api from "@/lib/studentApi";

import {
  Course,
  CourseDetails,
} from "@/types/course";

export const getCourses = async (): Promise<Course[]> => {

  const response = await api.get(
    "/courses"
  );

  return response.data.data;

};

export const getCourse = async (
  courseId: string
): Promise<CourseDetails> => {

  const response = await api.get(
    `/courses/${courseId}`
  );

  return response.data.data;

};

export const publishCourse = async (
  courseId: string
) => {

  const response = await api.patch(
    `/courses/${courseId}/publish`
  );

  return response.data;

};