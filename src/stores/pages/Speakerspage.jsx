import React, { useState } from "react";
import { speakerData } from "../data/speakers";
import Navibar from "../components/Navibar";
import { Link } from "react-router-dom";

const Speakerspage = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Extract unique brands
  const brands = [...new Set(speakerData.map((item) => item.brand))];

  // Handle checkbox change
  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  // Filtered speaker data based on selected brands
  const filteredSpeakers =
    selectedBrands.length === 0
      ? speakerData
      : speakerData.filter((item) => selectedBrands.includes(item.brand));

  return (
    <>
      <Navibar />
      <h1>Speakers</h1>

      {/* Brand Filter */}
      <div className="filter-section">
        <h3>Filter by Brand</h3>
        {brands.map((brand) => (
          <label key={brand}>
            <input
              type="checkbox"
              value={brand}
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />
            {brand}
          </label>
        ))}
      </div>

      {/* Speaker List */}
      <div className="product-list">
        {filteredSpeakers.map((item) => (
          <div key={item.id} className="product-card">
            <Link to={`/speaker-page/${item.id}`}>
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

export default Speakerspage;
