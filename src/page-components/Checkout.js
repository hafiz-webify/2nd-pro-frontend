import React, { useState } from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../api/orderApi";

function Checkout() {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    if (!shippingInfo.name || !shippingInfo.phone || !shippingInfo.address) {
      alert("Fill required fields");
      return;
    }

    try {
      setLoading(true);

      const orderData = {
        items: cartItems.map((item) => ({
          productId: item._id || item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
          size: item.size,
        })),
        shippingInfo,
        paymentMethod: "cod",
        totalAmount: getTotalPrice(),
      };

      await createOrder(orderData);
      clearCart();
      navigate("/order-success");
    } catch (err) {
      alert("Order failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 max-w-5xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {Object.keys(shippingInfo).map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field}
          value={shippingInfo[field]}
          onChange={handleChange}
          className="border p-2 mb-3 w-full"
        />
      ))}

      <button
        onClick={handlePlaceOrder}
        disabled={loading}
        className="bg-black text-white py-3 w-full mt-4"
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button>
    </div>
  );
}

export default Checkout;
