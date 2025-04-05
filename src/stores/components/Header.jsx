import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart } = useCart();
  const cartItemCount = cart.length;
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h2>E-Mart</h2>
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
      </div>
      <nav className="nav-links">
        <Link to="/login">Sign In / Register</Link>
        <Link to="/cart">
          Cart:
          <span style={{ color: "orange" }}>{cartItemCount}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
