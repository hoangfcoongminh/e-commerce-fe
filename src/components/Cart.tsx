import { LuMinus, LuPlus, LuShoppingBag, LuX } from "react-icons/lu";
import type { CartItem } from "../types/cartItem";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { closeCart } from "../store/cartSlice";

interface MiniCartProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemoveItem: (productId: number) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  totalPrice: number;
  onCheckout: () => void;
}

export function Cart({
  cart,
  onRemoveItem,
  onUpdateQuantity,
  totalPrice,
  onCheckout,
}: MiniCartProps) {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.cart.isOpen);

  const handleClose = () => {
    dispatch(closeCart());
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 z-40 transition-opacity" onClick={handleClose} />
      )}

      {/* Slide-out Cart */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out z-1000 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center gap-3">
              <LuShoppingBag className="w-6 h-6" style={{ color: "#116E33" }} />
              <h2 className="text-2xl">Shopping Cart</h2>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
            >
              <LuX className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart && cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <LuShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                <p className="text-lg text-gray-500">Your cart is empty</p>
                <p className="text-sm text-gray-400 mt-2">Add some items to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={item.images[0].url}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm mb-1 truncate">{item.name}</h3>
                      <p className="text-sm mb-2" style={{ color: "#116E33" }}>
                        ${item.realPrice.toFixed(2)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-md hover:bg-gray-200 transition-colors"
                        >
                          <LuMinus className="w-4 h-4" />
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-md hover:bg-gray-200 transition-colors"
                        >
                          <LuPlus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-2 hover:bg-gray-200 rounded-lg h-fit transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-600">Subtotal</span>
                <span className="text-2xl" style={{ color: "#116E33" }}>
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full py-4 text-white rounded-lg hover:opacity-90 transition-opacity text-lg"
                style={{ backgroundColor: "#116E33" }}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
