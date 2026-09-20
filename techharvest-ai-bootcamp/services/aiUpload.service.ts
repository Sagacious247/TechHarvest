import axios from "axios";

const API =
  process.env.NEXT_PUBLIC_API_URL;

export async function uploadPDF(
  file: File
) {
  const formData = new FormData();

  // This key MUST match upload.single(...)
  formData.append("file", file);

  const response = await axios.post(
    `${API}/ai/upload/pdf`,
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return response.data;
}