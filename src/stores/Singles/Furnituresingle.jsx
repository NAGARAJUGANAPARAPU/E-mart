
import React from "react";
import {furnitureData} from "../data/furniture";
import { useParams } from "react-router-dom";
import Navibar from "../components/Navibar";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";

const Furnituresingle = () => {
  const { id } = useParams();
  const { cart, addToCart } = useCart();
  const Product = furnitureData.find((item) => item.id === id);

  return (
    <>
      <Navibar />
      <div className="container">
        <div className="product-details">
          <div>
            <h2>{Product.product}</h2>
            <img src={Product.image} />

            <div className="product-advantages">
              <h3>Product Advantages</h3>
              <ul>
                <li>Energy efficient with 5-star rating</li>
                <li>Advanced cooling technology</li>
                <li>Low noise operation</li>
                <li>Durable and long-lasting build</li>
                <li>Environment-friendly refrigerant</li>
              </ul>
            </div>

            <div className="product-features">
              <h3>Product Features</h3>
              <ul>
                <li>Smart temperature control</li>
                <li>Wi-Fi connectivity for remote operation</li>
                <li>Auto-clean function</li>
                <li>Dehumidifier mode</li>
                <li>Sleep mode for energy saving</li>
              </ul>
            </div>
          </div>

          <div className="second-one">
            <div className="product-type">
              <h2>
                <strong>Brand:</strong>
                {Product.brand}
              </h2>
              <h2>
                <strong>Model:</strong>
                {Product.model}
              </h2>
              <h2>
                <strong>Category:</strong>
                {Product.category}
              </h2>
              <h2>
                <strong>Description:</strong>
                {Product.description}
              </h2>
              <p className="price">
                <strong>Price:</strong> ${Product.price}
              </p>
              <button className="primary" onClick={() => addToCart(Product)}>
              Add to Cart
            </button>
            </div>

            <div className="offers">
              <div>
                <h3>Offers:</h3>
              </div>
              <div className="offers-box1">
                <p>
                  <b>No Cost EMI:</b> available on select cards
                </p>
                <span>3 offers</span>
              </div>
              <div className="offers-box1">
                <p>
                  <b>Bank Offers: </b> 10% instant discount on XYZ Bank credit
                  cards
                </p>
                <span>10 offers</span>
              </div>
              <div className="offers-box1">
                <p>
                  <b>Cashback:</b> Get up to $50 cashback on eligible purchases
                </p>
                <span>23 offers</span>
              </div>
              <div className="offers-box1">
                <p>
                  <b>Partner Offers:</b> Special discounts with ABC partners
                </p>
                <span>31 offers</span>
              </div>
            </div>
          </div>

          <div className="third-one">
            <div className="exchange-options">
              <h3>Exchange Options</h3>
              <div>
                <label>
                  <input type="radio" name="exchange" value="with-exchange" />
                  With Exchange
                </label>
                <span>upto 40%</span>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="exchange"
                    value="without-exchange"
                  />
                  Without Exchange
                </label>
                <span>upto 20%</span>
              </div>
              <p>Up to 50% off</p>
            </div>
            <div className="stock-delivery-info">
              <h3>In Stock</h3>
              <p>
                Delivery by:{" "}
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p>Delivery Address: 123 Main Street, Springfield</p>
              <p>Delivery Time: Between 9:00 AM - 6:00 PM</p>
            </div>
            <div className="protection-plan">
              <h3>Add a Protection Plan:</h3>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="protection-plan"
                    value="1-year"
                  />
                  Additional AC Warranty for 1 year for $1,299.00
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="protection-plan"
                    value="2-years"
                  />
                  Total AC Protection for 2 years for $2,467.00
                </label>
              </div>
              <p className="price">Price: ${Product.price}</p>
            </div>
            <div className="quality-filter">
              <h3>Quality Filter</h3>
              <div>
                <label>
                  <input type="checkbox" name="quality" value="premium" />  
                  Premium Quality
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="quality" value="standard" />
                  Standard Quality
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="quality" value="economy" />
                  Economy Quality
                </label>
              </div>
            </div>
           
            <div className="buy-now">
              <button
                className="primary"
                onClick={() => alert("Proceeding to Buy Now")}
              >
                Buy Now
              </button>
            </div>
            <div className="gift-option">
              <h3>Gift Option</h3>
              <div>
                <label>
                  <input type="checkbox" name="gift-option" value="gift-wrap" />
                  Add Gift Wrap for $5.00
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Furnituresingle;
