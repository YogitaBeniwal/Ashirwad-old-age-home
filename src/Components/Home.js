import "../App.css";
import './Home.css';
import React, { useState } from 'react';
import HeroSection from "./HeroSection";
import Cards from "./Cards";
import product1 from "./images/img1.jpg";
import product2 from "./images/img2.jpg";
import product3 from "./images/img3.jpg";
import product4 from "./images/img4.jpg";
import product5 from "./images/img5.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

 const closeZoom = () => {
  setSelectedImage(null);
  };
  return (
    <>
       <HeroSection/>
      
       <section className="gallery-section">
        <h2 className="section-title">Glimpses of Joy</h2>

        <Carousel 
          showThumbs={false} 
          infiniteLoop={true} 
          autoPlay={true}
          showStatus={false} // This hides the navigation arrows and pagination
          showIndicators={true} // This also hides the navigation dots
        >
          {[product1, product2, product3, product4, product5].map((image, index) => (
            <div key={index} onClick={() => handleImageClick(image)} style={{ width: '50%', margin: 'auto' }}> 
              <img src={image} alt={`Gallery Image ${index + 1}`} style={{ width: '100%' }} /> 
            </div>
          ))}
        </Carousel>

        {/* Zoomed Image Overlay */}
        {selectedImage && (
          <div className="image-zoom" onClick={closeZoom}>
            <img src={selectedImage} alt="Zoomed Image" className="zoomed-image" />
          </div>
        )}
      </section>
      <Cards />
    
    </>
  );
}

export default Home;
