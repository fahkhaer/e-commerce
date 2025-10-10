import { authApiClient } from "@/lib/api-clients";
import { OrderRequest } from "@/types/checkout.interface";

export const addOrder = async (
  body:OrderRequest
): Promise<OrderRequest> => {
  const { data } = await authApiClient.post(`/orders/checkout`,body)
  return data?.success;
};