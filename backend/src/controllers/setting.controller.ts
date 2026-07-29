import { Request, Response } from "express";

import {
  getSettings,
  updateSettings,
} from "../services/setting.service";

export const getSettingsController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const settings = await getSettings();

  res.status(200).json({

    success: true,

    data: settings,

  });

};

export const updateSettingsController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const settings = await updateSettings(
    req.body
  );

  res.status(200).json({

    success: true,

    message: "Settings updated successfully.",

    data: settings,

  });

};