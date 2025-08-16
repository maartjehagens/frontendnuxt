import type { Product } from "../types/Product";
import { useApi } from "./useApi";
export const useProducts = () => {
  const { get, post, del } = useApi();
  const list = (page = 1) =>
    get<{ data: Product[]; meta: any }>(`/products?page=${page}`);
  const create = (payload: Partial<Product>) =>
    post<Product>("/products", payload);
  const remove = (id: number) => del<void>(`/products/${id}`);
  return { list, create, remove };
};
