import adminApi from "@/services/adminAuth.service";

export const getDashboardStatistics = async () => {
  const response = await adminApi.get("/admin/dashboard");
  return response.data.data;
};