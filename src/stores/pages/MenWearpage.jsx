// import React from "react";
// import { menData } from "../data/mens";
// import Navibar from "../components/Navibar";

// const Menswearpage = () => {
//   return (
//     <>
//       <Navibar />
//       <h1>MensWear</h1>

//       <div className="product-list">
//         {menData.map((item) => (
//           <div key={item.id} className="product-card">
//             <div className="product-image-container">
//               <img
//                 src={item.image}
//                 alt={item.product}
//                 className="product-image"
//               />
//             </div>
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

// export default Menswearpage;
import React, { useState } from "react";
import { menData } from "../data/mens";
import Navibar from "../components/Navibar";
import { Link } from "react-router-dom";

const Menswearpage = () => {
  const [selectedBrand, setSelectedBrand] = useState("All");

  // Extract unique brands from menData
  const brands = ["All", ...new Set(menData.map((item) => item.brand))];

  // Filter products based on selected brand
  const filteredProducts =
    selectedBrand === "All"
      ? menData
      : menData.filter((item) => item.brand === selectedBrand);

  return (
    <>
      <Navibar />
      <h1>MensWear</h1>

      <div className="filter-container">
        <label htmlFor="brandFilter">Filter by Brand: </label>
        <select
          id="brandFilter"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className="product-list">
        {filteredProducts.map((item) => (
          <div key={item.id} className="product-card">
            <Link to={`/menwear-page/${item.id}`}>
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

export default Menswearpage;
