import React from 'react';
import "../App.css";
import Cards from './Cards';
import './Products.css';            // Import a separate CSS file for Products component

function Products() {
  return (
    <div className='products' style={{ backgroundColor: 'white' }}> {/* Inline style for white background */}
      <Cards /> 
    </div>
  );
}

export default Products;
