// import React from "react";
// import { tvData } from "../data/tv";
// import Navibar from "../components/Navibar";
// import { Link } from "react-router-dom";

// const Tvpage = () => {
//   return (
//     <>
//       <Navibar />
//       <h1>TV</h1>

//       <div className="product-list">
//         {tvData.map((item) => (
//           <div key={item.id} className="product-card">
//              <Link to={`/Tv-page/${item.id}`}>
//             <div className="product-image-container">
//               <img
//                 src={item.image}
//                 alt={item.product}
//                 className="product-image"
//               />
//             </div>
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

// export default Tvpage;
import React, { useState } from "react";
import { tvData } from "../data/tv";
import Navibar from "../components/Navibar";
import { Link } from "react-router-dom";

const Tvpage = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Get unique brands for filter options
  const brands = [...new Set(tvData.map((item) => item.brand))];

  // Handle checkbox change
  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  // Filter TV data based on selected brands
  const filteredTvData = selectedBrands.length
    ? tvData.filter((item) => selectedBrands.includes(item.brand))
    : tvData;

  return (
    <>
      <Navibar />
      <h1>TV</h1>

      {/* Brand Filter Checkboxes */}
      <div className="filter-section">
        <h3>Filter by Brand</h3>
        {brands.map((brand) => (
          <label key={brand} className="filter-label">
            <input
              type="checkbox"
              value={brand}
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />
            {brand}
          </label>
        ))}
      </div>

      <div className="product-list">
        {filteredTvData.map((item) => (
          <div key={item.id} className="product-card">
            <Link to={`/Tv-page/${item.id}`}>
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

export default Tvpage;
  