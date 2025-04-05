import React from "react";
import { tvData } from "../data/tv";
import { useParams } from "react-router-dom";
import Navibar from "../components/Navibar";
import { useCart } from "../context/CartContext";

const Tvsingle = () => {
  const { id } = useParams();
  const { cart, addToCart } = useCart();

  const Product = tvData.find((item) => item.id === id);

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

export default Tvsingle;
