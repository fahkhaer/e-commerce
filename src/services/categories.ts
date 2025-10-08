import { apiClient } from "@/lib/api-clients";
import { iCategory } from "@/types/category.interface";

export const getCategories = async (): Promise<iCategory[]> => {
    const { data } = await apiClient.get(`/categories`)
    return data?.data?.categories
};
