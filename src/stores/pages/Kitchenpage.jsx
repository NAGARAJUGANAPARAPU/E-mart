// import React from "react";
// import { kitchenData } from "../data/kitchen";
// import Navibar from "../components/Navibar";
// import { Link } from "react-router-dom";

// const Kitchenpage = () => {
//   return (
//     <>
//       <Navibar />
//       <h1>KITCHEN</h1>

//       <div className="product-list">
//         {kitchenData.map((item) => (
//           <div key={item.id} className="product-card">
//             <Link to={`/kitchen-page/${item.id}`}>
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
//               <p className="product-name">{item.type}</p>
//               <p className="product-company">{item.brand}</p>
//               <p className="product-model">{item.model}</p>
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

// export default Kitchenpage;
import React, { useState } from "react";
import { kitchenData } from "../data/kitchen";
import Navibar from "../components/Navibar";
import { Link } from "react-router-dom";

const Kitchenpage = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);

  // Get unique types for filtering
  const uniqueTypes = [...new Set(kitchenData.map((item) => item.type))];

  const handleFilterChange = (event) => {
    const { value, checked } = event.target;
    setSelectedTypes((prev) =>
      checked ? [...prev, value] : prev.filter((type) => type !== value)
    );
  };

  // Filter products based on selected checkboxes
  const filteredProducts = selectedTypes.length
    ? kitchenData.filter((item) => selectedTypes.includes(item.type))
    : kitchenData;

  return (
    <>
      <Navibar />
      <h1>KITCHEN</h1>

      {/* Filter Section */}
      <div className="filter-section">
        <h2>Filter by Type</h2>
        {uniqueTypes.map((type) => (
          <label key={type}>
            <input type="checkbox" value={type} onChange={handleFilterChange} />
            {type}
          </label>
        ))}
      </div>

      {/* Product List */}
      <div className="product-list">
        {filteredProducts.map((item) => (
          <div key={item.id} className="product-card">
            <Link to={`/kitchen-page/${item.id}`}>
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
              <p className="product-name">{item.type}</p>
              <p className="product-company">{item.brand}</p>
              <p className="product-model">{item.model}</p>
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

export default Kitchenpage;
