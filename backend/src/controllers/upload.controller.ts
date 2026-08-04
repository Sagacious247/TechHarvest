// import { Request, Response } from "express";
// import { uploadVideo } from "../services/upload.service";
// import AppError from "../utils/AppError";

// export const uploadVideoController = async (
//   req: Request,
//   res: Response
// ) => {

//   if (!req.file) {
//     throw new AppError(
//       "Please select a video.",
//       400
//     );
//   }

//   try {
    
//     const video = await uploadVideo(req.file);
  
//     res.status(200).json({
//       success: true,
//       message: "Video uploaded successfully.",
//       data: video,
//     });
//   } catch (error) {
//     console.error("UPLOAD CONTROLLER ERROR");
//     console.error(error);

//     throw error;
//   }


// };



import { Request, Response } from "express";
import { uploadVideo } from "../services/upload.service";
import AppError from "../utils/AppError";
import { createMedia } from "../services/media.service";

export const uploadVideoController = async (
  req: Request,
  res: Response
) => {
  try {
    if (!req.file) {
      throw new AppError("Please select a video.", 400);
    }

    const video = await uploadVideo(req.file);
    console.log("===== SAVING MEDIA =====")

    await createMedia({
      name: req.file.originalname,
      url: video.url,
  publicId: video.publicId,
  type: "video",
  format: req.file.mimetype.split("/")[1],
  size: req.file.size,
  duration: video.duration,
  folder: "techharvest/lessons",
  uploadedBy: req.user!.id,
});
console.log("===== MEDIA SAVED =====");

    res.status(200).json({
      success: true,
      message: "Video uploaded successfully.",
      data: video,
    });

  } catch (error) {

    console.error("UPLOAD ERROR:");
    console.error(error);

    throw error;
  }
};