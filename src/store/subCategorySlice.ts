import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { SubCategory } from "../types/subCategory";
import type { ApiResponse, ApiError } from "../types/api";
import { subCategoryService } from "../services/subCategory.service";

interface SubCategoryState {
  subCategories: SubCategory[];
  loading: boolean;
  error: string | null;
}

const initialState: SubCategoryState = {
  subCategories: [],
  loading: false,
  error: null,
};

export const fetchAllSubCategories = createAsyncThunk<
  ApiResponse<SubCategory[]>,
  void,
  { rejectValue: ApiError }
>("subCategories/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const response = await subCategoryService.getAll();
    console.log("Response: ", response);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data as ApiError);
  }
});

const subCategorySlice = createSlice({
  name: "subCategories",
  initialState,
  reducers: {
    clearSubCategories(state) {
      state.subCategories = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSubCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllSubCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.subCategories = action.payload.data;
      })
      .addCase(fetchAllSubCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.message : "An unknown error occurred.";
      });
  },
});

export const { clearSubCategories } = subCategorySlice.actions;
export default subCategorySlice.reducer;
