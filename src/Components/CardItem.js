import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css'; // Import a CSS file for styling

function CardItem(props) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure 
            className='cards__item__pic-wrap' 
            data-category={props.label}
            onClick={() => setIsZoomed(true)} // Add onClick to the image wrapper
          >
            <img
              className='cards__item__img'
              alt='Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>

        {/* Zoomed Image Modal */}
        {isZoomed && (
          <div className="zoom-modal" onClick={() => setIsZoomed(false)}>
            <img src={props.src} alt="Zoomed Image" className="zoomed-img" />
          </div>
        )}
      </li>
    </>
  );
}

export default CardItem;
