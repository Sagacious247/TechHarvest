// import axios from "axios";
// import adminApi from "@/lib/adminApi";

// interface UploadSignature {
//   timestamp: number;
//   signature: string;
//   folder: string;
//   cloudName: string;
//   apiKey: string;
// }

// export interface UploadedVideo {
//   url: string;
//   publicId: string;
//   duration: number;
// }

// /**
//  * Get signed upload credentials
//  */
// async function getUploadSignature(): Promise<UploadSignature> {
//   const response = await adminApi.post(
//     "/upload/signature"
//   );

//   return response.data.data;
// }

// /**
//  * Upload directly to Cloudinary
//  */
// export async function uploadLessonVideo(
//   file: File,
//   onProgress?: (progress: number) => void
// ): Promise<UploadedVideo> {

//   const signature =
//     await getUploadSignature();

//   const formData = new FormData();

//   formData.append("file", file);
//   formData.append(
//     "api_key",
//     signature.apiKey
//   );
//   formData.append(
//     "timestamp",
//     signature.timestamp.toString()
//   );
//   formData.append(
//     "signature",
//     signature.signature
//   );
//   formData.append(
//     "folder",
//     signature.folder
//   );

//   const response = await axios.post(

//     `https://api.cloudinary.com/v1_1/${signature.cloudName}/video/upload`,

//     formData,

//     {

//       onUploadProgress(event) {

//         if (
//           event.total &&
//           onProgress
//         ) {

//           onProgress(
//             Math.round(
//               (event.loaded / event.total) * 100
//             )
//           );

//         }

//       },

//       timeout: 0,

//       maxBodyLength: Infinity,

//       maxContentLength: Infinity,

//     }

//   );

//   return {

//     url: response.data.secure_url,

//     publicId: response.data.public_id,

//     duration: response.data.duration,

//   };

// }


import axios from "axios";
import adminApi from "@/lib/adminApi";

interface UploadSignature {
  timestamp: number;
  signature: string;
  folder: string;
  cloudName: string;
  apiKey: string;
}

export interface UploadedVideo {
  url: string;
  publicId: string;
  duration: number;
  thumbnail: string;
}

/**
 * Get signed upload credentials
 */
async function getUploadSignature(): Promise<UploadSignature> {
  const response = await adminApi.post("/upload/signature");

  return response.data.data;
}

/**
 * Upload directly to Cloudinary
 */
async function uploadVideo(
  file: File,
  onProgress?: (progress: number) => void
): Promise<UploadedVideo> {
  const signature = await getUploadSignature();

  const formData = new FormData();

  formData.append("file", file);
  formData.append("api_key", signature.apiKey);
  formData.append(
    "timestamp",
    signature.timestamp.toString()
  );
  formData.append(
    "signature",
    signature.signature
  );
  formData.append("folder", signature.folder);

  const response = await axios.post(
    `https://api.cloudinary.com/v1_1/${signature.cloudName}/video/upload`,
    formData,
    {
      onUploadProgress(event) {
        if (event.total && onProgress) {
          onProgress(
            Math.round(
              (event.loaded / event.total) * 100
            )
          );
        }
      },

      timeout: 0,
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
    }
  );

  return {
  url: response.data.secure_url,
  publicId: response.data.public_id,
  duration: response.data.duration,

  // Cloudinary thumbnail
  thumbnail: response.data.secure_url.replace(
    "/upload/",
    "/upload/so_1/"
  ).replace(/\.[^/.]+$/, ".jpg"),
};
}

/**
 * Lesson Videos
 */
export async function uploadLessonVideo(
  file: File,
  onProgress?: (progress: number) => void
) {
  return uploadVideo(file, onProgress);
}

/**
 * Landing Page Preview Video
 */
export async function uploadLandingVideo(
  file: File,
  onProgress?: (progress: number) => void
) {
  return uploadVideo(file, onProgress);
}