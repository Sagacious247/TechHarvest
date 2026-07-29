import adminApi from "./adminAuth.service";
import { Settings } from "@/types/settings";

export const getSettings = async () => {

  const response = await adminApi.get<{
    success: boolean;
    data: Settings;
  }>("/admin/settings");

  return response.data.data;

};

export const updateSettings = async (
  data: Partial<Settings>
) => {

  const response = await adminApi.put<{
    success: boolean;
    data: Settings;
  }>(
    "/admin/settings",
    data
  );

  return response.data.data;

};