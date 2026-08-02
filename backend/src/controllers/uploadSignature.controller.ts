import { Request, Response } from "express";
import cloudinary from "../config/cloudinary";

export const getUploadSignatureController = async (
  req: Request,
  res: Response
) => {

  const timestamp = Math.round(Date.now() / 1000);

  const folder = "techharvest/lessons";

  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp,
      folder,
    },
    process.env.CLOUDINARY_API_SECRET!
  );

  res.json({
    success: true,
    data: {
      timestamp,
      signature,
      folder,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
    },
  });

};