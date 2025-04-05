import React from 'react'
import {acData} from '../data/ac'


const Ac = () => {
  const fiveImages = acData.slice(0, 5)
   
  return (
    <>
      <h1>AC</h1>
    <div className="product-list">
      
      { fiveImages.map((item) => (
     
        <div key={item.id} className="product-card">
          
        <div className="product-image-container">
          <img src={item.image} alt={item.product} className="product-image" />
        </div>
        <div className="product-info">
          <p className="product-name">{item.product}</p>
          <p className="product-company">{item.company}</p>
          <p className="product-model">{item.model}</p>
          <p className="product-price">${item.price}</p>
          <p className="product-category">{item.category}</p>
          
        </div>
      </div>
    ))}
      </div>
      </>
  
  )
}

export default Ac
