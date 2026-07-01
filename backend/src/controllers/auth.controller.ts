import { Request, Response } from "express";
import {
  registerAdmin,
  loginAdmin,
} from "../services/auth.service";

export const registerAdminController = async (
  req: Request,
  res: Response
): Promise<void> => {

  try {

    const {
      fullName,
      email,
      password,
    } = req.body;

    const result = await registerAdmin(
      fullName,
      email,
      password
    );

    res.status(201).json({
      success: true,
      message: "Admin registered successfully.",
      data: result,
    });

  } catch (error: any) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }

};

export const loginAdminController = async (
  req: Request,
  res: Response
): Promise<void> => {

  try {

    const {
      email,
      password,
    } = req.body;

    const result = await loginAdmin(
      email,
      password
    );

    res.status(200).json({
      success: true,
      message: "Login successful.",
      data: result,
    });

  } catch (error: any) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }

};