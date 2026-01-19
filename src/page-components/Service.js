// src/page-components/Developer.js
import React from "react";
import "../App.css";
import "../index.css";
import me from "./me.jpg"
function Developer() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 pt-5">About the Developer</h1>

      <div className="text-center mb-4 ">
        <img
          src={me}  
          alt="786"
          className="rounded-circle img-fluid "
          style={{ maxWidth: "150px" }}
        />
      </div>

      <h2 className="text-center mb-3">Hafiz Abdullah</h2>
      <p className="text-center lead">
        Full Stack Web Developer | Frontend & Backend Enthusiast
      </p>

      <h3 className="mt-5">Skills</h3>
      <ul className="list-inline text-center">
        <li className="list-inline-item mx-3">HTML</li>
        <li className="list-inline-item mx-3">CSS</li>
        <li className="list-inline-item mx-3">Bootstrap</li>
        <li className="list-inline-item mx-3">JavaScript</li>
        <li className="list-inline-item mx-3">React</li>
        <li className="list-inline-item mx-3">Node.js</li>
        <li className="list-inline-item mx-3">MongoDB</li>
      </ul>

      <h3 className="mt-5">Projects</h3>
      <ul>
        <li>E-commerce Website (This Project)</li>
        <li>Portfolio Website</li>
        <li>Other Web Apps</li>
      </ul>

      <h3 className="mt-5">Contact</h3>
      <p>Email: <a href="mailto:hafiz560888@gmail.com">hafiz560888@gmail.com</a></p>
      <p>GitHub: <a href="https://github.com/hafiz-webify/ollama-ai-backend">github.com/YourGitHub</a></p>
      <p>Phone: <a href="tel:03004308604">03004308604</a></p>

      <p className="text-center mt-5 fst-italic">Built with ❤️ by Hafiz Abdullah</p>
    </div>
  );
}

export default Developer;
