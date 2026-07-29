import api from "@/lib/api";

export const getModuleDashboard = async (
  courseId: string
) => {

  const response = await api.get(
    `/admin/module-dashboard/${courseId}`
  );

  return response.data.data;

};