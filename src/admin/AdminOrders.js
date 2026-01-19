import React, { useEffect, useState } from "react";
import { getAllOrders, updateOrderStatus } from "../api/orderApi";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const { data } = await getAllOrders();
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Orders</h2>

      {orders.map((order) => (
        <div key={order._id} className="border p-4 mb-4">
          <p><b>Name:</b> {order.shippingInfo.name}</p>
          <p><b>Phone:</b> {order.shippingInfo.phone}</p>
          <p><b>Total:</b> PKR {order.totalAmount}</p>
          <p><b>Status:</b> {order.status}</p>

          <select
            value={order.status}
            onChange={(e) =>
              updateOrderStatus(order._id, { status: e.target.value }).then(fetchOrders)
            }
            className="border mt-2"
          >
            <option>Pending</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default AdminOrders;
