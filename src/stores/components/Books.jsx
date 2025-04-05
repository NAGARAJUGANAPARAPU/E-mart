import React from "react";
import { booksData } from "../data/books";

const Books = () => {
  const fiveImages = booksData.slice(0, 5);
  return (
    <>
      <h1>BOOKS</h1>

      <div className="list-details">
        {fiveImages.map((item) => {
          return (
            <div className="card-details">
              <div className="image">
                <img src={item.image} />
              </div>
              <div className="product">{item.title}</div>
              <div className="company">{item.author}</div>
              <div className="model">{item.product}</div>
              <div className="price">${item.price}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Books;
