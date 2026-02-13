import type { ApiResponse } from "../types/api";
import type { PageResponse } from "../types/pageResponse";
import type { FilterRequestArgs, Product } from "../types/product";
import api from "./api";

export const productService = {
  filter(params: { page?: number; size?: number; sort?: string }, body: FilterRequestArgs["body"]) {
    return api.post<ApiResponse<PageResponse<Product>>>("/products/filter", body, { params });
  },
  getDetail(slug: string) {
    return api.post<ApiResponse<Product>>(`/products/${slug}`);
  }
};
