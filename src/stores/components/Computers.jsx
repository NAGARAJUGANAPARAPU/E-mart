import React from "react";
import { computerData } from "../data/computers";

const Computers = () => {
  const firstFiveimages = computerData.slice(0, 5);
  return (
    <>
      <h1>COMPUTER</h1>
      <div className="list-details">
        {firstFiveimages.map((item) => {
          return (
            <div className="card-details">
              <div className="image">
                <img src={item.image} />
              </div>
              <div className="product">{item.company}</div>
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

export default Computers;
