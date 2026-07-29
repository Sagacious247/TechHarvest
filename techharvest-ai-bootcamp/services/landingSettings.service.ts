import adminApi from "./adminAuth.service";

export interface LandingSettings {
  previewVideo: {
    url: string;
    publicId: string;
    thumbnail: string;
    duration: number;
  };
}

export async function getLandingSettings() {
  const response = await adminApi.get<{
    success: boolean;
    data: LandingSettings;
  }>("/landing-settings");

  return response.data.data;
}

export async function updateLandingSettings(
  data: Partial<LandingSettings>
) {
  const response = await adminApi.patch<{
    success: boolean;
    data: LandingSettings;
  }>("/landing-settings", data);

  return response.data.data;
}