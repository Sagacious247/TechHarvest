import adminApi from "./adminAuth.service";
import { AdminCertificate } from "@/types/certificate";

export async function getAdminCertificates() {
  const response = await adminApi.get<{
    success: boolean;
    data: AdminCertificate[];
  }>("/certificates");

  return response.data.data;
}