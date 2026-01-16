import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Category } from "../types/category";
import { categoryService } from "../services/category.service";
import type { ApiError, ApiResponse } from "../types/api";

interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  categories: [],
  loading: false,
  error: null,
};

export const fetchAllCategories = createAsyncThunk<
  ApiResponse<Category[]>,
  void,
  { rejectValue: ApiError }
>("categories/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const response = await categoryService.getAll();
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data as ApiError);
  }
});

export const fetchAllCategoriesWithSubCategories = createAsyncThunk<
  ApiResponse<Category[]>,
  void,
  { rejectValue: ApiError }
>("categories/fetchAllWithSubCategories", async (_, { rejectWithValue }) => {
  try {
    const response = await categoryService.getAllWithSubCategories();
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data as ApiError);
  }
});

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    clearCategories(state) {
      state.categories = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.data;
      })
      .addCase(fetchAllCategories.rejected, (state, action) => {
        state.loading = false;
        const err = action.payload;
        if (err) {
          state.error = err.message;
        } else {
          state.error = "An unknown error occurred.";
        }
      })

      .addCase(fetchAllCategoriesWithSubCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCategoriesWithSubCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.data;
      })
      .addCase(fetchAllCategoriesWithSubCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.message : "An unknown error occurred.";
      });
  },
});

export const { clearCategories } = categorySlice.actions;
export default categorySlice.reducer;
