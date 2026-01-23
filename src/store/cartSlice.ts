import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ApiError, ApiResponse } from "../types/api";
import type { CartItem } from "../types/cartItem";
import { cartService } from "../services/cart.service";

interface CartState {
  cartItems: CartItem[];
  isOpen: boolean;
  totalPrice: number;
  loading?: boolean;
  error: string | null;
}

const initialState: CartState = {
  cartItems: [],
  isOpen: false,
  totalPrice: 0,
  loading: false,
  error: null,
};

export const getCartItems = createAsyncThunk<
  ApiResponse<CartItem[]>,
  void,
  { rejectValue: ApiError }
>("cart/getCartItems", async (_, { rejectWithValue }) => {
  try {
    const response = await cartService.getCartItems();
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data as ApiError);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart(state) {
      state.cartItems = [];
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
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.message : "An unknown error occurred.";
      });
  },
});

export const { clearCart, openCart, closeCart, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
