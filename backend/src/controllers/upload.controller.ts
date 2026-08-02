import { Request, Response } from "express";
import { uploadVideo } from "../services/upload.service";
import AppError from "../utils/AppError";

export const uploadVideoController = async (
  req: Request,
  res: Response
) => {

  if (!req.file) {
    throw new AppError(
      "Please select a video.",
      400
    );
  }

  try {
    
    const video = await uploadVideo(req.file);
  
    res.status(200).json({
      success: true,
      message: "Video uploaded successfully.",
      data: video,
    });
  } catch (error) {
    console.error("UPLOAD CONTROLLER ERROR");
    console.error(error);

    throw error;
  }


};