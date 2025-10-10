import { authApiClient } from "@/lib/api-clients";
import { iOrder } from "@/types/order.interface";

export const getMyOrders = async (): Promise<iOrder[]> => {
  const { data } = await authApiClient.get(`/orders/my`);
  return data?.data?.orders;
};
