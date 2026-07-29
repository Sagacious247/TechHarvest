import adminApi from "@/lib/adminApi";

export async function getAdminPayments() {

  const response = await adminApi.get(
    "/admin/payment-history"
  );

  return response.data.data;

}