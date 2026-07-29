// import api from "@/lib/api";
import api from "@/lib/adminApi";

export interface UploadedImage {
  url: string;
  publicId: string;
}

export const uploadImage = async (
  file: File,
  onProgress?: (progress: number) => void
): Promise<UploadedImage> => {

  const formData = new FormData();

  formData.append("image", file);

  const response = await api.post(
    "/admin/media/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },

      onUploadProgress: (event) => {

        if (!event.total) return;

        const progress = Math.round(
          (event.loaded * 100) / event.total
        );

        onProgress?.(progress);

      },
    }
  );

  return response.data.data;
};