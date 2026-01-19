import React, { useEffect, useState } from "react";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/productApi";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    price: "",
    image: "",
  });
  const [editingId, setEditingId] = useState(null);

  const fetchProducts = async () => {
    const { data } = await getAllProducts();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await updateProduct(editingId, form);
    } else {
      await createProduct(form);
    }

    setForm({ title: "", price: "", image: "" });
    setEditingId(null);
    fetchProducts();
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditingId(product._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete product?")) {
      await deleteProduct(id);
      fetchProducts();
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Products</h2>

      {/* Add / Edit Form */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-3">
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border p-2 w-full"
          required
        />
        <input
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border p-2 w-full"
          required
        />
        <input
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="border p-2 w-full"
          required
        />

        <button className="bg-black text-white px-4 py-2">
          {editingId ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* Product List */}
      {products.map((p) => (
        <div
          key={p._id}
          className="border p-4 mb-3 flex justify-between items-center"
        >
          <div>
            <p><b>{p.title}</b></p>
            <p>PKR {p.price}</p>
          </div>

          <div className="space-x-3">
            <button
              onClick={() => handleEdit(p)}
              className="px-3 py-1 border"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(p._id)}
              className="px-3 py-1 border text-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminProducts;
