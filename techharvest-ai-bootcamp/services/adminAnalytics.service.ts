import adminApi from "@/services/adminAuth.service";
import { AnalyticsData } from "@/types/analytics";

export async function getAnalytics() {
  const response = await adminApi.get<{
    success: boolean;
    data: AnalyticsData;
  }>("/admin/analytics");

  return response.data.data;
}