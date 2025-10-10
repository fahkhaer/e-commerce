import { authApiClient } from "@/lib/api-clients";
import { CartResponse } from "@/types/product.interface";

export const getCart = async (): Promise<CartResponse> => {
  const { data } = await authApiClient.get(`/cart`);
  return data?.data;
};

export const addCart = async (
  productId: number,
  qty: number
): Promise<{ productId: number; qty: number }> => {
  const { data } = await authApiClient.post(`/cart/items`, { productId, qty });
  return data?.data;
};

export const editCart = async (
  itemId: number,
  qty: number
): Promise<{ itemId: number; qty: number }> => {
  const { data } = await authApiClient.patch(`/cart/items/${itemId}`, { qty });
  return data?.data;
};

export const deleteCart = async (
  itemId: number
): Promise<{ itemId: number }> => {  
  const { data } = await authApiClient.delete(`/cart/items/${itemId}`);
  return data?.data;
};
