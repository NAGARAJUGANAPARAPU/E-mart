import React from "react";
import { watchData } from "../data/watch";

const Watch = () => {
  const firstFiveimages = watchData.slice(0, 5);
  return (
    <>
      <h1> Watch</h1>
      <div className='list-details'>
        {firstFiveimages.map((item) => {
          return (
            <div className="card-details">
              <div className="image">
                <img src={item.image} />
              </div>
              <div className="product">{item.brand}</div>
              <div className="model">{item.model}</div>
              <div className="price">${item.price}</div>
              <div className="company">{item.category}</div>

            </div>
          );
        })}
      </div>
    </>
  );
};

export default Watch;
