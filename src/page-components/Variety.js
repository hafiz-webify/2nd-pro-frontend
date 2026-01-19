 // src/page-components/Variety.js
import React from "react";
import { Link,Outlet } from "react-router-dom";
import "../App.css";
import "../index.css";

const categories = [
  { name: "Unstitched Collection", link: "/products" },
  { name: "Ready To Wear", link: "/products" },
  { name: "Accessories", link: "/products" },
];

function Variety() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 pt-5">Our Variety</h1>
      <div className="row justify-content-center">
        {categories.map((cat, idx) => (
          <div key={idx} className="col-md-4 mb-3 text-center">
            <Link to="/products" className="text-decoration-none">
              <div className="p-4 border rounded hover-shadow" style={{ transition: "0.3s" }}>
                <h3>{cat.name}</h3>
                <p>Explore our {cat.name} collection</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Outlet/>
    </div>
  );
}

export default Variety;
