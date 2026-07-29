import LandingSettings from "../models/landingSettings.model";

export async function getLandingSettingsService() {
  let settings = await LandingSettings.findOne();

  if (!settings) {
    settings = await LandingSettings.create({});
  }

  return settings;
}

interface UpdateLandingSettingsData {
  previewVideo?: {
    url: string;
    publicId: string;
    thumbnail?: string;
    duration?: number;
  };
}

export async function updateLandingSettingsService(
  data: UpdateLandingSettingsData
) {
  let settings = await LandingSettings.findOne();

  if (!settings) {
    settings = await LandingSettings.create({});
  }

  if (data.previewVideo) {
    settings.previewVideo = {
      ...settings.previewVideo,
      ...data.previewVideo,
    };
  }

  await settings.save();

  return settings;
}