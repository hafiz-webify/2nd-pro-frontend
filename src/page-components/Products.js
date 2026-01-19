// src/page-components/Products.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../productsData";

function Products() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-10 pb-20 bg-gray-100 min-h-screen pt-32">
      <h1 className="text-center mb-4 pt-5 pb-16">Our Variety</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <div
              className="bg-white rounded-lg shadow overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="w-full h-[22rem] overflow-hidden">
                <img
                  src={hoveredId === item.id ? item.images[1] : item.images[0]}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-3">
                <h3 className="text-sm font-medium mb-1">{item.title}</h3>
                <div className="flex items-center gap-2 text-sm">
                  {item.salePrice ? (
                    <>
                      <span className="font-semibold text-gray-900">
                        PKR {item.salePrice.toLocaleString()}
                      </span>
                      <span className="line-through text-gray-400">
                        PKR {item.price.toLocaleString()}
                      </span>
                    </>
                  ) : (
                    <span className="font-semibold text-gray-900">
                      PKR {item.price.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
