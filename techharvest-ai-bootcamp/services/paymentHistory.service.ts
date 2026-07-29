// import api from "@/lib/api";
import api from "@/lib/studentApi";

export interface PaymentHistory {

  enrollmentId: string;

  amount: number;

  enrollmentStatus: string;

  paymentStatus: string;

  paymentReference: string | null;

  paidAt: string | null;

  course: {

    _id: string;

    title: string;

    thumbnail?: string;

  };

  receipt: {

    _id: string;

    receiptNumber: string;

  } | null;

}

export const getPaymentHistory = async () => {

  const response = await api.get(
    "/payment-history"
  );

  return response.data.data as PaymentHistory[];

};