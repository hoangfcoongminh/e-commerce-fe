import api from "./api";

export const categoryService = {
  getAll() {
    return api.get("/categories");
  },
  getAllWithSubCategories() {
    return api.get("/categories/sub-categories");
  },
};
