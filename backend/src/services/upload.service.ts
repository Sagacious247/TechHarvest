// import { Readable } from "stream";
// import cloudinary from "../config/cloudinary";

// export const uploadVideo = (
//   file: Express.Multer.File
// ): Promise<{
//   url: string;
//   publicId: string;
//   duration: number;
// }> => {
//   return new Promise((resolve, reject) => {

//     const stream = cloudinary.uploader.upload_stream(
//        {
//     folder: "techharvest/lessons",
//     resource_type: "video",

//     // Upload large videos in chunks
//     chunk_size: 6000000,

//     // Allow uploads to take longer
//     timeout: 600000,
//   },
//       (error, result) => {

//         if (error || !result) {
//   return reject(
//     error ?? new Error("Cloudinary upload failed.")
//   );
// }

//         resolve({
//           url: result.secure_url,
//           publicId: result.public_id,
//           duration: result.duration || 0,
//         });

//       }
//     );

//     Readable.from(file.buffer).pipe(stream);

//   });
// };



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

    console.log("========== UPLOAD START ==========");
    console.log("File:", file.originalname);
    console.log("Size:", file.size);
    console.log("Mime:", file.mimetype);

    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "techharvest/lessons",
        resource_type: "video",
        chunk_size: 6000000,
        timeout: 600000,
      },

      (error, result) => {

        if (error) {

          console.error("CLOUDINARY ERROR");
          console.error(error);

          return reject(error);

        }

        if (!result) {

          console.error("Cloudinary returned no result.");

          return reject(
            new Error("No Cloudinary result.")
          );

        }

        console.log("UPLOAD SUCCESS");
        console.log(result);

        resolve({
          url: result.secure_url,
          publicId: result.public_id,
          duration: result.duration || 0,
        });

      }
    );

    stream.on("error", (err) => {

      console.error("STREAM ERROR");
      console.error(err);

      reject(err);

    });

    stream.end(file.buffer);

  });

};