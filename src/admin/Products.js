// src/admin/Products.jsx
import { useEffect, useState } from "react";
import { getAllProducts, createProduct, updateProduct, deleteProduct } from "../api/products";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: 0, description: "" });

  const fetchProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = async () => {
    await createProduct(newProduct);
    setNewProduct({ name: "", price: 0, description: "" });
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  return (
    <div>
      <h2>Manage Products</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <button onClick={handleAdd}>Add Product</button>
      </div>

      <ul>
        {products.map((p) => (
          <li key={p._id}>
            {p.name} - ${p.price}
            <button onClick={() => handleDelete(p._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
