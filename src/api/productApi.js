import API from "./api";

// get all products
export const getAllProducts = () => API.get("/products");

// create product
export const createProduct = (data) => API.post("/products", data);

// update product
export const updateProduct = (id, data) =>
  API.put(`/products/${id}`, data);

// delete product
export const deleteProduct = (id) =>
  API.delete(`/products/${id}`);
