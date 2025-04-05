import React from "react";
import { kitchenData } from "../data/kitchen";
const Kitchen = () => {
  const firstFiveimages = kitchenData.slice(0, 5);
  return (
    <>
      <h1>Kitchen </h1>
      <div className='list-details'>
        {firstFiveimages.map((item) => {
          return (
            <div className="card-details">
              <div className="image">
                <img src={item.image} />
              </div>
              <div className="product">{item.type}</div>
              <div className="company">{item.brand}</div>
              <div className="model">{item.model}</div>
              <div className="price">${item.price}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Kitchen;
