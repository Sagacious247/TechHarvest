import { Request, Response } from "express";

import {
  getLandingSettingsService,
  updateLandingSettingsService,
} from "../services/landingSettings.service";

export async function getLandingSettingsController(
  req: Request,
  res: Response
) {
  const settings = await getLandingSettingsService();

  return res.status(200).json({
    success: true,
    data: settings,
  });
}

export async function updateLandingSettingsController(
  req: Request,
  res: Response
) {
  const settings =
    await updateLandingSettingsService(req.body);

  return res.status(200).json({
    success: true,
    message: "Landing settings updated successfully.",
    data: settings,
  });
}