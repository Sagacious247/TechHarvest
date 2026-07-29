// import adminApi from "@/lib/adminApi";

// export async function uploadLessonVideo(file: File) {
//   const formData = new FormData();

//   formData.append("video", file);

//   const response = await adminApi.post(
//     "/upload/video",
//     formData,
//     {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     }
//   );

//   return response.data.data;
// }


import adminApi from "@/lib/adminApi";

async function uploadVideo(file: File) {
  const formData = new FormData();

  formData.append("video", file);

  const response = await adminApi.post(
    "/upload/video",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data.data;
}

export async function uploadLessonVideo(file: File) {
  return uploadVideo(file);
}

export async function uploadLandingVideo(file: File) {
  return uploadVideo(file);
}