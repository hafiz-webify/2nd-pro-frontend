import axios from "axios";

// ================= USER API (WITH TOKEN) =================
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// ================= ADMIN API (NO TOKEN) =================
const ADMIN_API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// ================= ORDERS =================

// USER: place order ✅ (token required)
export const createOrder = (orderData) =>
  API.post("/orders", orderData);

// ADMIN: get all orders ✅ (NO token)
export const getAllOrders = () =>
  ADMIN_API.get("/orders");

// ADMIN: update order status ✅ (NO token)
export const updateOrderStatus = (id, data) =>
  ADMIN_API.put(`/orders/${id}`, data);
