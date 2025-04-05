import React from "react";
import { useCart } from "./stores/context/CartContext";
import Navibar from "./stores/components/Navibar";


const UseCart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <>
      <Navibar />
      <div className="cart-container">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.company} />
              </div>
              <div className="cart-item-details">
                <div className="cart-item-company">{item.company}</div>
                <div className="cart-item-type">{item.type}</div>
                <div className="cart-item-model">{item.model}</div>
                <div className="cart-item-brand">{item.brand}</div>
                <div className="cart-item-price">${item.price}</div>
              </div>
              <button
                className="btn btn-danger"
                onClick={(id) => removeFromCart(item.id)}
              >
                remove
              </button>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  );
};

export default UseCart;
