// src/api/products.js
import api from "./api";

// Get all products
export const getAllProducts = async () => {
  const res = await api.get("/products");
  return res.data;
};

// Create product (Admin)
export const createProduct = async (productData) => {
  const res = await api.post("/products", productData);
  return res.data;
};

// Update product (Admin)
export const updateProduct = async (id, updatedData) => {
  const res = await api.put(`/products/${id}`, updatedData);
  return res.data;
};

// Delete product (Admin)
export const deleteProduct = async (id) => {
  const res = await api.delete(`/products/${id}`);
  return res.data;
};
