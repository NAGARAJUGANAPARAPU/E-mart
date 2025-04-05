import React from "react";
import { useParams } from "react-router-dom";
import { watchData } from "../data/watch";
import Navibar from "../components/Navibar";
import { useCart } from "../context/CartContext";

const Watchsingle = () => {
  const { id } = useParams();
  const { cart, addToCart } = useCart();

  const Product = watchData.find((item) => item.id === id);

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
        <button className="primary" onClick={() => addToCart(Product)}>
          Add toCART
        </button>
      </div>
    </>
  );
};

export default Watchsingle;
