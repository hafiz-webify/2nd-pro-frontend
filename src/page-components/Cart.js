import React from "react";
import { useCart } from "../CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return <p className="pt-32 text-center text-sm">Your cart is empty</p>;
  }

  return (
    <div className="pt-28 px-4 sm:px-8 pb-24 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.map((item) => (
        <div
          key={`${item.id}-${item.size}`}
          className="flex gap-3 mb-4 border-b pb-4"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-28 object-cover rounded"
          />

          <div className="flex-1 text-sm">
            <h3 className="font-medium">{item.title}</h3>
            <p>Size: {item.size}</p>
            <p className="font-semibold">PKR {item.price}</p>

            <div className="flex items-center gap-3 mt-2">
              <input
                type="number"
                value={item.quantity}
                min="1"
                className="border px-2 py-1 w-16 text-sm"
                onChange={(e) =>
                  updateQuantity(item.id, item.size, Number(e.target.value))
                }
              />

              <button
                className="text-red-600 text-xs"
                onClick={() => removeFromCart(item.id, item.size)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      <h2 className="text-lg font-semibold mt-6">
        Total: PKR {getTotalPrice()}
      </h2>

      {/* ✅ CHECKOUT BUTTON */}
      <Link
        to="/checkout"
        className="block w-full text-center bg-black text-white py-4 mt-6 rounded text-sm hover:bg-gray-800 transition"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}

export default Cart;