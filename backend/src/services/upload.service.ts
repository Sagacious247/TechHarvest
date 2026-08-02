import { Readable } from "stream";
import cloudinary from "../config/cloudinary";

export const uploadVideo = (
  file: Express.Multer.File
): Promise<{
  url: string;
  publicId: string;
  duration: number;
}> => {
  return new Promise((resolve, reject) => {

    const stream = cloudinary.uploader.upload_stream(
       {
    folder: "techharvest/lessons",
    resource_type: "video",

    // Upload large videos in chunks
    chunk_size: 6000000,

    // Allow uploads to take longer
    timeout: 600000,
  },
      (error, result) => {

        if (error || !result) {
  return reject(
    error ?? new Error("Cloudinary upload failed.")
  );
}

        resolve({
          url: result.secure_url,
          publicId: result.public_id,
          duration: result.duration || 0,
        });

      }
    );

    Readable.from(file.buffer).pipe(stream);

  });
};