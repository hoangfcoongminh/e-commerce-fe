import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "../services/product.service";
import type { ApiError, ApiResponse } from "../types/api";
import type { Pagination } from "../types/pagination";
import type { FilterRequestArgs, Product } from "../types/product";

interface ProductState {
  products: Product[];
  product: Product | null;
  loading: boolean;
  error: string | null;
  pagination: Pagination;
}

const initialState: ProductState = {
  products: [],
  product: null,
  loading: false,
  error: null,
  pagination: {
    page: 0,
    size: 10,
    totalElements: 0,
    totalPages: 0,
    sort: "id: ASC",
  },
};

export const filterProducts = createAsyncThunk<
  ApiResponse<Product[]>,
  FilterRequestArgs,
  { rejectValue: ApiError }
>("products/filter", async ({ page, size, sort, body }, { rejectWithValue }) => {
  try {
    const response = await productService.filter({ page, size, sort }, body);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data as ApiError);
  }
});

export const getDetailsProduct = createAsyncThunk<
  ApiResponse<Product>,
  { slug: string },
  { rejectValue: ApiError }
>("products/getDetails", async ({ slug }, { rejectWithValue }) => {
  try {
    const response = await productService.getDetail(slug);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data as ApiError);
  }
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearProducts(state) {
      state.products = [];
      state.pagination = initialState.pagination;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(filterProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(filterProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data;
      })
      .addCase(filterProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.message : "An unknown error occurred.";
      })

      .addCase(getDetailsProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDetailsProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload.data;
      })
      .addCase(getDetailsProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.message : "An unknown error occurred.";
      });
  },
});

export const { clearProducts } = productSlice.actions;
export default productSlice.reducer;
