import React from "react";
import { Link } from "react-router-dom";

const Navibar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/ac-page">AC</Link>
        </li>
        <li>
          <Link to="/books-page">Books</Link>
        </li>
        <li>
          <Link to="/computer-page">Computer</Link>
        </li>
        <li>
          <Link to="/fridge-page">Fridge</Link>
        </li>
        <li>
          <Link to="/furniture-page">Furniture</Link>
        </li>
        <li>
          <Link to="/kitchen-page">Kitchen</Link>
        </li>
        <li>
          <Link to="/menwear-page">MenWear</Link>
        </li>
        <li>
          <Link to="/mobiles-page">Mobile</Link>
        </li>
        <li>
          <Link to="/speaker-page">Speakers</Link>
        </li>
        <li>
          <Link to="/tv-page">TV</Link>
        </li>
        <li>
          <Link to="/watch-page">Watch</Link>
        </li>
        <li>
          <Link to="/womenwear-page">WomenWear</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navibar;
