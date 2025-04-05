import React from "react";
import { tvData } from "../data/tv";

const Tv = () => {
  const firstFiveimages = tvData.slice(0, 5);
  return (
    <>
      <h1>Tv</h1>
      <div className="list-details">
        {firstFiveimages.map((item) => (
          <div className="card-details" key={item.id}>
            <div className="image">
              <img src={item.image} alt={item.model} />
            </div>

            <div className="product">{item.brand}</div>
            <div className="model">{item.model}</div>
            <div className="price">${item.price}</div>
            <div className="company">{item.category}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tv;
