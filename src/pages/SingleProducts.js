import React,{useContext} from "react";
import { useParams } from "react-router-dom";
import { TbCurrencyNaira } from "react-icons/tb";
import { data } from "../data";
import { Cartcontext } from "../context/Context";
const SingleProducts = () => {
  
  const GlobelState = useContext(Cartcontext);
  const dispatch = GlobelState.dispatch
  console.log(GlobelState);
  const { id } = useParams();

  const item = data.find((p) => p.id.toString() === id);
  return (
    <div className="container">
      <div className="product_img">
        <div className="inner">
          <img src={item.image} alt="" />
        </div>
      </div>
      <div className="product_details">
        {
          item.quantity = 1
        }
        <h1>{item.title}</h1>
        <p className="desc">{item.description}</p>
        <p className="cat">
          <b>Category:</b>
          {item.category}
        </p>
      </div>
      <div className="product_price">
        <h4 className="flex">
          Price: <TbCurrencyNaira /> {item.price}
        </h4>
        {item.rating.count > 0 ? (
          <h3>
            <b>in stock</b>: {item.rating.count}
          </h3>
        ) : (
          <h3>
            <b>out of stock</b>
          </h3>
        )}
        <div className="cart-btn">
          {item.rating.count > 0 ? (
            <button onClick={() => dispatch({type: "ADD", payload: item})} className="btn">Add To Cart</button>
          ) : (
            <button disabled className="cta">
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
