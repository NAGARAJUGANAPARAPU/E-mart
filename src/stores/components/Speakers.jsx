import React from "react";
import { speakerData } from "../data/speakers";
const Speakers = () => {
  const firstFiveimages = speakerData.slice(0, 5);
  return (
    <>
      <h1>Speakers</h1>
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

export default Speakers;
