import api from "@/lib/api";
import { AdminReceipt } from "@/types/receipt";

export async function getAdminReceipts() {
  const response = await api.get<{
    success: boolean;
    data: AdminReceipt[];
  }>("/receipts");

  return response.data.data;
}