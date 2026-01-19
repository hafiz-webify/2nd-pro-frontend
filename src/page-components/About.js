// src/page-components/About.js
import React from "react";
import "../App.css";
import "../index.css";

function About() {
  return (
    <div className="container py-5 pt-5">
      <h1 className="text-center mb-4 pt-5">About Us</h1>
      <p className="text-center lead">
        BAROQUE is dedicated to providing the finest collection of unstitched
        and ready-to-wear clothing. Our mission is to bring elegance and
        quality to your wardrobe.
      </p>
      <div className="text-center mt-4">
        <img
          src="https://baroque.pk/cdn/shop/files/LOGO_PNG_V01_ca621119-9615-4843-a4c7-3cbf07d1452a.png?v=1727526585&width=280"
          alt="Baroque Logo"
          className="img-fluid"
          style={{ maxWidth: "200px" }}
        />
      </div>
    </div>
  );
}

export default About;
