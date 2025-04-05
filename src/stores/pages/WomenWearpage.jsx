import React, { useState } from "react";
import { womanData } from "../data/women";
import Navibar from "../components/Navibar";
import { Link } from "react-router-dom";

const Womanwearpage = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleCheckboxChange = (type) => {
    setSelectedTypes((prevTypes) =>
      prevTypes.includes(type)
        ? prevTypes.filter((t) => t !== type)
        : [...prevTypes, type]
    );
  };

  const filteredData = selectedTypes.length
    ? womanData.filter((item) => selectedTypes.includes(item.type))
    : womanData;

  const uniqueTypes = [...new Set(womanData.map((item) => item.type))];

  return (
    <>
      <Navibar />
      <h1>Women's Wear</h1>

      <div className="filter-section">
        <h3>Filter by Type:</h3>
        {uniqueTypes.map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              value={type}
              checked={selectedTypes.includes(type)}
              onChange={() => handleCheckboxChange(type)}
            />
            {type}
          </label>
        ))}
      </div>

      <div className="product-list">
        {filteredData.map((item) => (
          <div key={item.id} className="product-card">
            <Link to={`/women-page/${item.id}`}>
              <div className="product-image-container">
                <img
                  src={item.image}
                  alt={item.product}
                  className="product-image"
                />
              </div>
            </Link>
            <div className="product-info">
              <p className="product-id">{item.id}</p>
              <p className="product-name">{item.type}</p>
              <p className="product-company">{item.brand}</p>
              <p className="product-model">{item.model}</p>
              <p className="product-price">${item.price}</p>
              <p className="product-category">{item.category}</p>
              <p className="product-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Womanwearpage;
