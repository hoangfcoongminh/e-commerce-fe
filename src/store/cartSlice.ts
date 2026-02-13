import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ApiError, ApiResponse } from "../types/api";
import { cartService } from "../services/cart.service";
import type { Cart } from "../types/cart";

interface CartState {
  cart: Cart;
  isOpen: boolean;
  totalPrice: number;
  loading?: boolean;
  error: string | null;
}

const initialState: CartState = {
  cart: { id: 0, userId: 0, items: [] },
  isOpen: false,
  totalPrice: 0,
  loading: false,
  error: null,
};

export const getCartItems = createAsyncThunk<ApiResponse<Cart>, void, { rejectValue: ApiError }>(
  "cart/getCartItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await cartService.getCartItems();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data as ApiError);
    }
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart(state) {
      state.cart = { id: 0, userId: 0, items: [] };
      state.isOpen = false;
      state.totalPrice = 0;
    },
    toggleCart(state) {
      state.isOpen = !state.isOpen;
    },
    openCart(state) {
      state.isOpen = true;
    },
    closeCart(state) {
      state.isOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload.data;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.message : "An unknown error occurred.";
      });
  },
});

export const { clearCart, openCart, closeCart, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
