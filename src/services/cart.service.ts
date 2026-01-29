import type { ApiResponse } from "../types/api";
import type { CartItem } from "../types/cartItem";
import api from "./api"

export const cartService = {
    addToCart: (slug: string) => {
        return api.post<ApiResponse<CartItem>>(`/carts/add-to-cart/${slug}`);
    },
    removeFromCart: (itemId) => {
        // Logic to remove item from cart
    },
    updateCartItem: (itemId, quantity) => {
        // Logic to update cart item quantity
    },
    getCartItems: () => {
        return api.get<ApiResponse<CartItem[]>>("/carts");
    },
    clearCart: () => {
        // Logic to clear the cart
    }
}