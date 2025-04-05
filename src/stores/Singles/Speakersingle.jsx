import React from "react";
import { speakerData } from "../data/speakers";
import { useParams } from "react-router-dom";
import Navibar from "../components/Navibar";
import { useCart } from "../context/CartContext";

const Speakersingle = () => {
  const { id } = useParams();
  const { cart, addToCart } = useCart();
  const Product = speakerData.find((item) => item.id === id);

  if (!Product) {
    return (
      <>
        <Navibar />
        <div className="container">
          <h2>Product not found</h2>
        </div>
      </>
    );
  }

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
          <h2>{Product.company}</h2>
          <h2>{Product.model}</h2>
          <p>Price: ${Product.price}</p>
        </div>
        <button className="primary" onClick={() => addToCart(Product)}>
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Speakersingle;