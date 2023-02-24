import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import { TbCurrencyNaira } from "react-icons/tb";
import Hero from "../components/Hero";
const Home = () => {

  return (
    <>
      <Hero />
      <div className="product_content">
        {data.map((item) => (
          <div key={item.id} className="products">
            <div className="inner">
              <img src={item.image} alt="" />
            </div>
            <Link to={`product/${item.id}`} className="link">
              <h3>{item.title}</h3>
              <h4 className="flex-home">
                <TbCurrencyNaira />
                {item.price}
              </h4>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
