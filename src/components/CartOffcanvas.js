import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

function CartOffcanvas() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    getTotalPrice,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      <div className="absolute right-0 top-0 w-96 h-full bg-white p-6">
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsCartOpen(false)}
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex gap-3 mb-3"
              >
                <img
                  src={item.image}
                  className="w-16 h-20 object-cover"
                  alt=""
                />
                <div>
                  <p>{item.title}</p>
                  <p>Size: {item.size}</p>
                  <p>
                    PKR {item.price} × {item.quantity}
                  </p>
                </div>
              </div>
            ))}

            <p className="font-semibold mt-4">
              Total: PKR {getTotalPrice()}
            </p>

            <Link
              to="/cart"
              className="block text-center bg-black text-white py-2 mt-4"
              onClick={() => setIsCartOpen(false)}
            >
              View Cart
            </Link>

            <Link
              to="/checkout"
              className="block text-center border border-black py-2 mt-2"
              onClick={() => setIsCartOpen(false)}
            >
              Checkout
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default CartOffcanvas;
