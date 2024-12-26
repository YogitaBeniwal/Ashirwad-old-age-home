import React, { useState } from 'react';
import './About.css';
import heroImg from "./images/hero-image.jpg";
import DhoopImg from "./images/product2.jpg";
import product1 from "./images/img1.jpg";
import product2 from "./images/img2.jpg";
import product3 from "./images/img3.jpg";
import product4 from "./images/img4.jpg";
import product5 from "./images/img5.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image click for zoom
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeZoom = () => {
    setSelectedImage(null);
  };
  return ( 
    <div className="about-container">
      <section className="hero-section"> 
        <div className="hero-content">
          <h1 className="about-title">Ashirwad Vrudh Ashram</h1>
          <p className="hero-subtitle">Where compassion creates a loving home.</p>
        </div>
        <img 
          src={heroImg} 
          alt="Smiling Senior Residents" 
          className="hero-image" 
          style={{ maxWidth: '40%' }} // Add inline style for width
        /> 
      </section>

      <section className="mission-section">
        <div className="mission-content">
          <h2 className="section-title">Our Mission</h2>
          <p>At Ashirwad Old Age Home, we provide compassionate care and a peaceful environment for our elderly residents, ensuring they enjoy their golden years with dignity and comfort. Our facility offers comprehensive healthcare, recreational activities, and personalized attention to make every resident feel valued.</p>
        </div>
      </section>

      <section className="values-section">
        <div className="values-content">
          <h2 className="section-title">Our Values</h2>
          <ul>
            <li>Compassion</li>
            <li>Respect</li>
            <li>Dignity</li>
            <li>Community</li>
          </ul>
        </div>
      </section>

      <section className="initiative-section">
        <div className="initiative-content">
          <h2 className="section-title">Our Socially Responsible Initiative</h2>
          <p>We also run a sustainable business making high-quality natural dhoop and loban. This socially responsible initiative supports our NGO financially and offers our residents meaningful work and a sense of purpose.</p>
          <img src={DhoopImg} alt="Handmade Dhoop" className="initiative-image" />
        </div>
      </section>

      <section className="gallery-section">
        <h2 className="section-title">Glimpses of Joy</h2>

        {/* Carousel for Images */}
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
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
    </div>
  );
};

export default About;
