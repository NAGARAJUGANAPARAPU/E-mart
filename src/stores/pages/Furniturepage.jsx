// import React, { useState } from "react";
import { furnitureData } from "../data/furniture";
import Navibar from "../components/Navibar";
import { Link } from "react-router-dom";
import { useState } from "react";

const Furniturepage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const uniqueCategories = [
    ...new Set(furnitureData.map((item) => item.category)),
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredFurniture =
    selectedCategories.length > 0
      ? furnitureData.filter((item) =>
          selectedCategories.includes(item.category)
        )
      : furnitureData;

  return (
    <>
      <Navibar />
      <h1>Furniture</h1>

      <div className="filter-section">
        <h3>Filter by Category:</h3>
        {uniqueCategories.map((category) => (
          <label key={category} className="filter-label">
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </label>
        ))}
      </div>

      <div className="product-list">
        {filteredFurniture.map((item) => (
          <div key={item.id} className="product-card">
            <Link to={`/furniture-page/${item.id}`}>
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
              <p className="product-name">{item.brand}</p>
              <p className="product-company">{item.model}</p>
              <p className="product-model">{item.title}</p>
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

export default Furniturepage;
