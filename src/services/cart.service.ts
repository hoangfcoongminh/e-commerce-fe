import api from "./api"

export const cartService = {
    addToCart: (item) => {
        // Logic to add item to cart
    },
    removeFromCart: (itemId) => {
        // Logic to remove item from cart
    },
    updateCartItem: (itemId, quantity) => {
        // Logic to update cart item quantity
    },
    getCartItems: () => {
        api.get("/carts");
    },
    clearCart: () => {
        // Logic to clear the cart
    }
}