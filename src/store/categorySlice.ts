import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Category } from "../types/category";
import { categoryService } from "../services/category.service";

interface CategoryState {
  items: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchAllCategories = createAsyncThunk<Category[], void, { rejectValue: any }>(
  "categories/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await categoryService.getAll();
      return response.data.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const fetchAllCategoriesWithSubCategories = createAsyncThunk<
  Category[],
  void,
  { rejectValue: any }
>("categories/fetchAllWithSubCategories", async (_, { rejectWithValue }) => {
  try {
    const response = await categoryService.getAllWithSubCategories();
    return response.data.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      return rejectWithValue(error.response.data);
    }
    return rejectWithValue("An unknown error occurred");
  }
});

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    clearCategories(state) {
      state.items = [];
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
        state.items = action.payload;
      })
      .addCase(fetchAllCategories.rejected, (state) => {
        state.loading = false;
        state.error = "An unknown error occurred";
      })

      .addCase(fetchAllCategoriesWithSubCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCategoriesWithSubCategories.fulfilled, (state, action) => {
        state.loading = false;
        console.log("Fetched categories with sub-categories:", action.payload);

        state.items = action.payload;
      })
      .addCase(fetchAllCategoriesWithSubCategories.rejected, (state) => {
        state.loading = false;
        state.error = "An unknown error occurred";
      });
  },
});

export const { clearCategories } = categorySlice.actions;
export default categorySlice.reducer;
