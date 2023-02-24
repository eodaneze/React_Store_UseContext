import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Hero from "./Hero";
import { Cartcontext } from "../context/Context";
const Navbar = () => {
   
  const GlobelState = useContext(Cartcontext);
  const dispatch = GlobelState.dispatch
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
