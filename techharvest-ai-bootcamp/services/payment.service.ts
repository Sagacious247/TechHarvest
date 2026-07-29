// import api from "@/lib/api";
import api from "@/lib/studentApi";

export interface InitializePaymentResponse {

  authorization_url: string;

  payment: any;

  reference: string;

}

export const initializePayment =
  async (
    enrollmentId: string
  ): Promise<InitializePaymentResponse> => {

    const response = await api.post(
      "/payments/initialize",
      {
        enrollmentId,
      }
    );

    return response.data.data;

  };

  export const verifyPayment = async (
  reference: string
) => {

  const response = await api.get(
    `/payments/verify/${reference}`
  );

  return response.data.data;

};