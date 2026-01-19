import "./index.css";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Navigation from "./Navigation";
import Footer from "./Footer";
import CartOffcanvas from "./components/CartOffcanvas";

import Home from "./page-components/Home";
import Products from "./page-components/Products";
import ProductDetail from "./page-components/ProductDetail";
import Cart from "./page-components/Cart";
import Checkout from "./page-components/Checkout";
import OrderSuccess from "./page-components/OrderSuccess";
import AdminOrders from "./admin/AdminOrders";
import Signup from "./page-components/Sign";
import About from "./page-components/About";
import Login from "./page-components/Login";
import Service from "./page-components/Service";
import Contact from "./page-components/Contact"
import Variety from "./page-components/Variety"
import AdminProducts from "./admin/AdminProducts";
function App() {
  return (
    <>
      <Navigation />
      <CartOffcanvas />

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
<Route path="/sign" element={<Signup/>} />
<Route path="/login" element={<Login/>} />
<Route path="/about" element={<About/>} />
<Route path="/service" element={<Service/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/Variety" element={<Variety/>} />
        {/* ADMIN */}
        <Route path="/admin" element={<AdminOrders />} />
<Route path="/admin/products" element={<AdminProducts />} />
        <Route path="*" element={<Navigate to="/login"/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
