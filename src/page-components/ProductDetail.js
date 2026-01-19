import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../CartContext";
import { products } from "../productsData";

function ProductDetail() {
  const { id } = useParams(); // get product id from URL
  const product = products.find((p) => p.id === parseInt(id));

  const { addToCart } = useCart(); // Cart context
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [mainImage, setMainImage] = useState(product.images[0]);

  const sizes = ["S", "M", "L", "XL"];

  if (!product) return <p>Product not found!</p>;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.salePrice || product.price,
      quantity,
      size: selectedSize,
      image: mainImage,
    });
    alert("Product added to cart!");
  };

  return (
    <div className="px-10 pt-32 flex flex-col md:flex-row gap-10">
      {/* Images */}
      <div className="flex flex-col md:w-1/2 gap-4">
        <img
          src={mainImage}
          alt={product.title}
          className="w-full h-[60rem] object-cover rounded-lg border"
        />
        <div className="flex gap-2">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={product.title}
              className={`w-24 h-24 object-cover border rounded cursor-pointer ${
                mainImage === img ? "border-black" : "border-gray-300"
              }`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="md:w-1/2 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>

        <p className="text-2xl font-semibold text-gray-900">
          PKR {product.salePrice || product.price}
        </p>

        <p className="text-gray-700">{product.description}</p>
        <p className="text-gray-500">Details: {product.details}</p>
        <p className="text-gray-500">Care: {product.care}</p>

        {/* Size selection */}
        <div>
          <p className="font-medium mb-1">Select Size:</p>
          <div className="flex gap-2 mb-4">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-3 py-1 border rounded ${
                  selectedSize === size ? "bg-black text-white" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-2 mb-4">
          <button
            className="px-2 py-1 border"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="px-2 py-1 border"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>

        {/* Add to Cart */}
        <button
          className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
