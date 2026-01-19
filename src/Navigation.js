import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddCardIcon from "@mui/icons-material/AddCard";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./App.css";
import './index.css';
import { Link, Outlet } from 'react-router-dom';

function Navigation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar bg="white" expand={false} className="fixed-top">
        <div className="overflow-hidden bg-black w-screen">
          <div className="flex animate-marquee">
            <span className="text-white mr-10 whitespace-nowrap">
              FOR INTERNATIONAL WEBSITE VISIT WWW.BAROQUE.COM.PK &nbsp;&nbsp;&nbsp;
              <a href="baroque.html" className="text-white no-underline">
                CALL US AT UAN:111-302-302
              </a>
            </span>
            <span className="text-white mr-10 whitespace-nowrap">
              FOR INTERNATIONAL WEBSITE VISIT WWW.BAROQUE.COM.PK &nbsp;&nbsp;&nbsp;
              <a href="baroque.html" className="text-white no-underline">
                CALL US AT UAN:111-302-302
              </a>
            </span>
          </div>
        </div>

        <Container fluid className="flex items-center justify-between">
          <Navbar.Brand href="#">
            <img
              src="https://baroque.pk/cdn/shop/files/LOGO_PNG_V01_ca621119-9615-4843-a4c7-3cbf07d1452a.png?v=1727526585&width=280"
              width="120"
              height="40"
              className="h-6 w-auto text-center"
              alt="Logo"
            />
          </Navbar.Brand>

          <div className="flex gap-2 items-center">
            <Button className="flex items-center gap-2 p-1 border-0 bg-transparent hover:bg-gray-100 rounded">
              <Link to="/checkout" ><AddCardIcon className="w-5 h-5 text-black" /></Link>
              <Link to="/cart" > <ShoppingCartIcon className="w-5 h-5 text-black" /></Link>
              <SearchIcon className="w-5 h-5 text-black" />
              <Link to="/sign" > <AccountCircleIcon className="w-5 h-5 text-black" /></Link>
            </Button>
            <Navbar.Toggle onClick={handleShow} aria-controls="offcanvasNavbar" />
          </div>

          <Navbar.Offcanvas
  show={show}
  onHide={handleClose}
  id="offcanvasNavbar"
  aria-labelledby="offcanvasNavbarLabel"
  placement="start"
  className="bg-dark text-white"
  style={{ width: '250px', maxWidth: '80%' }} // width 250px desktop, max 80% on mobile
>

            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                <Link to="/home" onClick={handleClose}>Home</Link>
                <Link to="/about" onClick={handleClose}>About</Link>
                <Link to="/service" onClick={handleClose}>About Developer</Link>
                <Link to="/contact" onClick={handleClose}>Contact</Link>
                <Link to="/Variety" onClick={handleClose}>Variety</Link>
                <Link to="/sign" onClick={handleClose}>Signup</Link>
                <Link to="/cart" onclick={handleClose}>Cart</Link>
                <Link to="/admin/products" onclick={handleClose}>Products</Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Outlet should be outside Navbar */}
      <Outlet />
    </div>
  );
}

export default Navigation;
