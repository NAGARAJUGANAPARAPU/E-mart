// import React from "react";
// import { fridgeData } from "../data/fridge";
// import Navibar from "../components/Navibar";
// import { Link } from "react-router-dom";

// const Fridgepage = () => {
//   return (
//     <>
//       <Navibar />
//       <h1>Fridge</h1>

//       <div className="product-list">
//         {fridgeData.map((item) => (
//           <div key={item.id} className="product-card">
//             <Link to={`/fridge-page/${item.id}`}>
//               <div className="product-image-container">
//                 <img
//                   src={item.image}
//                   alt={item.product}
//                   className="product-image"
//                 />
//               </div>
//             </Link>
//             <div className="product-info">
//               <p className="product-id">{item.id}</p>
//               <p className="product-name">{item.brand}</p>
//               <p className="product-company">{item.model}</p>
//               <p className="product-model">{item.title}</p>
//               <p className="product-price">${item.price}</p>
//               <p className="product-category">{item.category}</p>
//               <p className="product-description">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Fridgepage;
import React, { useState } from "react";
import { fridgeData } from "../data/fridge";
import Navibar from "../components/Navibar";
import { Link } from "react-router-dom";

const Fridgepage = () => {
  const [selectedBrand, setSelectedBrand] = useState("");

  const uniqueBrands = [...new Set(fridgeData.map((item) => item.brand))];

  const filteredFridges = selectedBrand
    ? fridgeData.filter((item) => item.brand === selectedBrand)
    : fridgeData;

  return (
    <>
      <Navibar />
      <h1>Fridge</h1>

      <div className="filter-container">
        <label htmlFor="brandFilter">Filter by Brand:</label>
        <select
          id="brandFilter"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          {uniqueBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className="product-list">
        {filteredFridges.map((item) => (
          <div key={item.id} className="product-card">
            <Link to={`/fridge-page/${item.id}`}>
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

export default Fridgepage;
