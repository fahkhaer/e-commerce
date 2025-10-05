import { apiClient } from "@/lib/api-clients";
import { iProduct } from "@/types/product.interface";

export const getProducts = async (): Promise<iProduct[]> => {
    const { data } = await apiClient.get(`/products`)
    return data?.data?.products
};

export const getProductsById = async (id:number): Promise<iProduct> => {
    const { data } = await apiClient.get(`/products/${id}`)
    return data?.data
};