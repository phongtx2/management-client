import { axiosClient } from "./axios";

export const getCategories = () => axiosClient.get("/api/categories");

export const getProducts = (pagingState) =>
  axiosClient.get(`/api/products?page=${pagingState}&limit=8`);

export const getProductById = (id) => axiosClient.get(`/api/products/${id}`);
