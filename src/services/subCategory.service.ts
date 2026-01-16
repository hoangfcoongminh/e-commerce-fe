import type { ApiResponse } from "../types/api";
import type { SubCategory } from "../types/subCategory";
import api from "./api"

export const subCategoryService = {
    getAll() {
        return api.get<ApiResponse<SubCategory[]>>("/sub-categories");
    }
}