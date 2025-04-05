// import React from "react";
// import { booksData } from "../data/books";
// import Navibar from "../components/Navibar";
// import { Link } from "react-router-dom";

// const Bookspage = () => {
//   return (
//     <>
//       <Navibar />

//       <h1>BOOKS</h1>

//       <div className="product-list">
//         {booksData.map((item) => (
//           <div key={item.id} className="product-card">
//             <Link to={`/Books-page/${item.id}`}>
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
//               <p className="product-company">{item.author}</p>
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

// export default Bookspage;
import React, { useState } from "react";
import { booksData } from "../data/books";
import Navibar from "../components/Navibar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Bookspage = () => {
  const [selectedAuthor, setSelectedAuthor] = useState("");

  // Get unique authors for dropdown options
  const authors = [...new Set(booksData.map((book) => book.author))];

  // Filter books based on selected author
  const filteredBooks = selectedAuthor
    ? booksData.filter((book) => book.author === selectedAuthor)
    : booksData;

  return (
    <>
      <Navibar />
      <h1>BOOKS</h1>

      {/* Dropdown to filter books by author */}
      <label>Filter by Author:</label>
      <select
        onChange={(e) => setSelectedAuthor(e.target.value)}
        value={selectedAuthor}
      >
        <option value="">All</option>
        {authors.map((author, index) => (
          <option key={index} value={author}>
            {author}
          </option>
        ))}
      </select>

      <div className="product-list">
        {filteredBooks.map((item) => (
          <div key={item.id} className="product-card">
            <Link to={`/Books-page/${item.id}`}>
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
              <p className="product-company">{item.author}</p>
              <p className="product-model">{item.title}</p>
              <p className="product-price">${item.price}</p>
              <p className="product-category">{item.category}</p>
              <p className="product-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Bookspage;
