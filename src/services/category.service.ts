import type { ApiResponse } from "../types/api";
import type { Category } from "../types/category";
import api from "./api";

export const categoryService = {
  getAll() {
    return api.get<ApiResponse<Category[]>>("/categories");
  },
  getAllWithSubCategories() {
    return api.get<ApiResponse<Category[]>>("/categories/sub-categories");
  },
};
