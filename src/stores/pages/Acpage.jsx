// import React from "react";
// import { acData } from "../data/ac";
// import Navibar from "../components/Navibar";
// import { Link } from "react-router-dom";

// const Acpage = () => {
//   return (
//     <>
//       <Navibar />
//       <h1>AC</h1>
//       <div className="product-list">
//         {acData.map((item) => (
//           <div key={item.id} className="product-card">
//             <Link to={`/ac-page/${item.id}`}>
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
//               <p className="product-name">{item.product}</p>
//               <p className="product-company">{item.company}</p>
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

// export default Acpage;
import React, { useState } from "react";
import { acData } from "../data/ac";
import Navibar from "../components/Navibar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Acpage = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const uniqueCompanies = [...new Set(acData.map((item) => item.company))];

  const handleCheckboxChange = (company) => {
    setSelectedCompanies((prev) =>
      prev.includes(company)
        ? prev.filter((c) => c !== company)
        : [...prev, company]
    );
  };

  const filteredData =
    selectedCompanies.length > 0
      ? acData.filter((item) => selectedCompanies.includes(item.company))
      : acData;

  return (
    <>
      <Navibar />
      <h1>AC</h1>
      <div className="fullpage">
        <div className="filter-section">
          <h2>Filter by Company:</h2>
          {uniqueCompanies.map((company) => (
            <label key={company} className="checkbox-label">
              <input
                type="checkbox"
                value={company}
                onChange={() => handleCheckboxChange(company)}
                checked={selectedCompanies.includes(company)}
              />
              {company}
            </label>
          ))}
        </div>

        <div className="product-list">
          {filteredData.map((item) => (
            <div key={item.id} className="product-card">
              <Link to={`/ac-page/${item.id}`}>
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
                <p className="product-name">{item.product}</p>
                <p className="product-company">{item.company}</p>
                <p className="product-model">{item.model}</p>
                <p className="product-price">${item.price}</p>
                <p className="product-category">{item.category}</p>
                <p className="product-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Acpage;
