// import api from "@/lib/api";
import api from "@/lib/studentApi";

export interface Certificate {
  _id: string;
  certificateNumber: string;
  verificationCode: string;
  createdAt: string;

  course: {
    _id: string;
    title: string;
    thumbnail?: string;
  };
}

export const getMyCertificates = async (): Promise<Certificate[]> => {

  const response = await api.get(
    "/certificates/my-certificates"
  );

  return response.data.data;

};

export const verifyCertificate = async (
  certificateNumber: string
) => {

  const response = await api.get(
    `/certificates/verify/${certificateNumber}`
  );

  return response.data.data;

};