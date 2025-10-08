import { authApiClient } from "@/lib/api-clients";
import { CartResponse } from "@/types/product.interface";

export const getCart = async (): Promise<CartResponse> => {
    const { data } = await authApiClient.get(`/cart`)
    return data?.data
};
//api
export const addCart = async (productId: number, qty: number): Promise<{productId: number, qty: number}> => {
//log prod id, qty
    const { data } = await authApiClient.post(`/cart/items`, {productId,qty}) //{id:20, qty:2}
    return data?.data
};

export const editCart = async (itemId: number, qty: number): Promise<{itemId: number, qty: number}> => {
//log prod id, qty
    const { data } = await authApiClient.patch(`/cart/items/${itemId}`, {qty}) // {qty:2}
    return data?.data
};

export const deleteCart = async (itemId: number): Promise<{itemId: number}> => {
//log prod id, qty
    const { data } = await authApiClient.post(`/cart/items${itemId}`)
    
    return data?.data
};