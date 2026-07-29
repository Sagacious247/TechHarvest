import api from "@/lib/adminApi";

export const getCourses = async (
  page = 1,
  search = ""
) => {

  const response = await api.get(
    "/admin/courses",
    {
      params: {
        page,
        search,
      },
    }
  );

  return response.data;

};

export const getCourse = async (
  id: string
) => {

  const response = await api.get(
    `/admin/courses/${id}`
  );

  return response.data;

};

export const createCourse = async (
  data: any
) => {

  const response = await api.post(
    "/admin/courses",
    data
  );

  return response.data;

};

export const updateCourse = async (
  id: string,
  data: any
) => {

  const response = await api.patch(
    `/admin/courses/${id}`,
    data
  );

  return response.data;

};

export const deleteCourse = async (
  id: string
) => {

  const response = await api.delete(
    `/admin/courses/${id}`
  );

  return response.data;

};

/**
 * -----------------------------------------
 * Publish Course
 * -----------------------------------------
 */
export async function publishCourse(
  id: string
) {
  const response = await api.patch(
    `/admin/courses/${id}/publish`
  );

  return response.data;
}

/**
 * -----------------------------------------
 * Feature Course
 * -----------------------------------------
 */
export async function featureCourse(
  id: string
) {
  const response = await api.patch(
    `/admin/courses/${id}/feature`
  );

  return response.data;
}