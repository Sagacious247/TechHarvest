import { Request, Response } from "express";
import { uploadImage } from "../services/adminMedia.service";

export const uploadImageController = async (
  req: Request,
  res: Response
): Promise<void> => {

  if (!req.file) {

    res.status(400).json({
      success: false,
      message: "No image uploaded.",
    });

    return;
  }

  const result: any = await uploadImage(req.file.buffer);

  res.status(200).json({

    success: true,

    message: "Image uploaded successfully.",

    data: {

      url: result.secure_url,

      publicId: result.public_id,

    },

  });

};