// import React from "react";
// import { mobileData } from "../data/mobiles";
// import Navibar from "../components/Navibar";

// const Mobilepage = () => {
//   return (
//     <>
//       <Navibar />
//       <h1>Mobiles</h1>

//       <div className="product-list">
//         {mobileData.map((item) => (
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

// export default Mobilepage;
import React, { useState } from "react";
import { mobileData } from "../data/mobiles";
import Navibar from "../components/Navibar";
import { Link } from "react-router-dom";

const Mobilepage = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const uniqueCompanies = [...new Set(mobileData.map((item) => item.company))];

  const handleCompanyChange = (company) => {
    setSelectedCompanies((prevSelected) =>
      prevSelected.includes(company)
        ? prevSelected.filter((c) => c !== company)
        : [...prevSelected, company]
    );
  };

  const filteredMobiles =
    selectedCompanies.length > 0
      ? mobileData.filter((item) => selectedCompanies.includes(item.company))
      : mobileData;

  return (
    <>
      <Navibar />
      <h1>Mobiles</h1>

      <div className="filter-section">
        <h3>Filter by Company</h3>
        {uniqueCompanies.map((company) => (
          <label key={company}>
            <input
              type="checkbox"
              value={company}
              checked={selectedCompanies.includes(company)}
              onChange={() => handleCompanyChange(company)}
            />
            {company}
          </label>
        ))}
      </div>

      <div className="product-list">
        {filteredMobiles.map((item) => (
          <div key={item.id} className="product-card">
            <Link to={`/mobile-page/${item.id}`}>
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
              <p className="product-company">{item.company}</p>
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

export default Mobilepage;
