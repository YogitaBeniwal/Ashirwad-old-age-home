import React, { useState } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import product1 from "./images/product1.jpg";
import product2 from "./images/product2.jpg";
import product3 from "./images/product3.jpg";
import product4 from "./images/img4.jpg";
import product5 from "./images/img5.jpg";

function Cards() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [product1, product2, product3, product4, product5];

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className='cards'>
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Supporting our home with handcrafted goodness</p>
      </div>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={product1}
              text='Explore the bliss of naturally made dhoop and loban and connect to the nature with us'
              label='preminum quality'
             
            />
            <CardItem
              src={product2}
              text='Handmade by Ashirwad residents, each purchase supports their self-reliance and sustainable living'
              label='preminum quality'
            
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={product3}
              text='Every purchase sustains the simple, dignified lives of the experienced artisans.'
              label='preminum quality'
              
            />
            
          </ul>
        </div>
      </div>

    </div>
    
  );
}

export default Cards;
