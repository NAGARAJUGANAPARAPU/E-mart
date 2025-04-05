import React, { useState } from "react";
import { computerData } from "../data/computers";
import Navibar from "../components/Navibar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Computerspage = () => {
  const [selectedCompany, setSelectedCompany] = useState("All");

  // Extract unique companies (from 'model' field) and add "All" option
  const companies = ["All", ...new Set(computerData.map((item) => item.model))];

  // Filter computers based on the selected company
  const filteredComputers =
    selectedCompany === "All"
      ? computerData
      : computerData.filter((item) => item.model === selectedCompany);

  return (
    <>
      <Navibar />
      <h1>Computers</h1>

      {/* Dropdown Filter for Company */}
      <div className="filter-container">
        <label htmlFor="companyFilter">Filter by Company: </label>
        <select
          id="companyFilter"
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          {companies.map((company, index) => (
            <option key={index} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>

      {/* Product List */}
      <div className="product-list">
        {filteredComputers.length > 0 ? (
          filteredComputers.map((item) => (
            <div key={item.id} className="product-card">
              <Link to={`/computer-page/${item.id}`}>
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
                <p className="product-company">{item.model}</p>
                <p className="product-model">{item.title}</p>
                <p className="product-model">{item.company}</p>

                <p className="product-price">${item.price}</p>
                <p className="product-category">{item.category}</p>
                <p className="product-description">{item.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No computers found for this company.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Computerspage;
