// import api from "@/lib/api";
import api from "@/lib/studentApi";

export interface Receipt {
  _id: string;
  receiptNumber: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  paymentReference: string;
  status: "paid" | "refunded";
  issuedAt: string;
  student: {
    fullName: string;
    email: string;
    phone?: string;
  };
  course: {
    _id: string;
    title: string;
    thumbnail?: string;
    duration?: string;
    price?: number;
  };
}

export const getMyReceipts = async (): Promise<Receipt[]> => {

  const response =
    await api.get("/receipts/me");

  return response.data.data;

};

export const getReceipt = async (
  id: string
): Promise<Receipt> => {

  const response =
    await api.get(`/receipts/${id}`);

  return response.data.data;

};