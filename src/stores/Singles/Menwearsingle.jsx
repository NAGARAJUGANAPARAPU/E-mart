import React from "react";
import { menData } from "../data/mens";
import { useParams } from "react-router-dom";
import Navibar from "../components/Navibar";
import { useCart } from "../context/CartContext";

const Menwearsingle = () => {
  const { id } = useParams();
  const { cart, addToCart } = useCart();
  const Product = menData.find((item) => item.id === id);
  return (
    <div>
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
    </div>
  );
};

export default Menwearsingle;
