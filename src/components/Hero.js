import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="all-hero">
      <div className="hero-content">
        <div className="hero-content-1">
          <div>
            <h1>Welcome To Dev_Daniel Online Store</h1>
            <Link to="/products" className="store-cta">
              <button>Explore Store</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
