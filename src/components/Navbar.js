import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Hero from "./Hero";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container-1">
          <div className="logo">
            <Link to="/" className="link">
              <h1>MyShop</h1>
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/products" className="link">
              Products
            </Link>
            <Link to="/cart" className="link">
              <AiOutlineShoppingCart /> Cart <span>0</span>
            </Link>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
