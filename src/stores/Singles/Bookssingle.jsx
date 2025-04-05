import React from "react";
import { booksData } from "../data/books";
import Navibar from "../components/Navibar";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Bookssingle = () => {
  const { id } = useParams();
  const { addToCart, cart } = useCart();
  const Product = booksData.find((item) => item.id === id);

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
          <h2>{Product.product}</h2>
          <h2>{Product.company}</h2>
          <h2>{Product.model}</h2>
          <p>Price: ${Product.price}</p>
        </div>
        <button className="primary" onClick={() => addToCart(Product)}>
          Add to CART
        </button>
      </div>
    </>
  );
};

export default Bookssingle;
