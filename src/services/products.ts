import { apiClient } from "@/lib/api-clients";
import { iProduct, iProductResponse } from "@/types/product.interface";

const id = 10

export const getProducts = async (): Promise<iProduct[]> => {
    const { data } = await apiClient.get(`/products`)
    return data?.data?.products
};

export const getProductsById = async (): Promise<iProduct> => {
    const { data } = await apiClient.get(`/products/${id}`)
    return data
};