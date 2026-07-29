import { Request, Response } from "express";
import { changePassword } from "../services/studentSettings.service";

export const changePasswordController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const {
    currentPassword,
    newPassword,
  } = req.body;

  await changePassword(
    req.user!.id,
    currentPassword,
    newPassword
  );

  res.status(200).json({

    success: true,

    message:
      "Password updated successfully.",

  });

};