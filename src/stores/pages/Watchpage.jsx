import React from "react";
import { watchData } from "../data/watch";
import Navibar from "../components/Navibar";
import { Link } from "react-router-dom";

const Watchpage = () => {
  return (
    <>
      <Navibar />
      <h1>watchData</h1>

      <div className="product-list">
        {watchData.map((item) => (
          <div key={item.id} className="product-card">
            <Link to={`/watch-page/${item.id}`}>
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

export default Watchpage;
