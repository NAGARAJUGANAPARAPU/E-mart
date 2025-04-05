import React from "react";
import { mobileData } from "../data/mobiles";
import { useParams } from "react-router-dom";
import Navibar from "../components/Navibar";
import { useCart } from "../context/CartContext";

const Mobilesingle = () => {
  const { id } = useParams();
  const { addToCart, cart } = useCart();
  const Product = mobileData.find((item) => item.id === id);
  return (
    <>
      <Navibar />
      <div className="container">
        <div className="product-details">
          <img
            src={Product.image}
            alt={Product.model}
            className="product-image"
          />
          <h2>{Product.product}</h2>
          <h2>{Product.company}</h2>
          <h2>{Product.model}</h2>
          <p>Price: ${Product.price}</p>
        </div>

        <button onClick={() => addToCart(Product)} className="btn btn-warning">
          add to cart
        </button>
      </div>
    </>
  );
};

export default Mobilesingle;
