import { axiosClient } from "./axios";

export const getCategories = () => axiosClient.get("/api/categories");

export const getProducts = (pagingState, filter) =>
  axiosClient.get(
    `/api/products?page=${pagingState}&categoryId=${filter}&limit=8`
  );

export const getProductById = (id) => axiosClient.get(`/api/products/${id}`);
