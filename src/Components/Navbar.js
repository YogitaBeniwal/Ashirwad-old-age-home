import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faHandHoldingHeart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Ashirwad 
            <FontAwesomeIcon icon={faHandHoldingHeart} />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/donate' className='nav-links' onClick={closeMobileMenu}>
                Donate
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
            
            <li>
              <a
                href='https://www.google.com/maps/place/Ashirwad+old+age+home/@18.4534474,73.7982161,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc295cab56d78bb:0xa8af2f7f7b812285!8m2!3d18.4534474!4d73.7982161!16s%2Fg%2F11k9bl27qf?hl=en-IN&entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
                target="_blank"
                rel="noopener noreferrer"
              >
               Location
              </a>
            </li>
          </ul>
          {button && (
            <a
              href='https://www.google.com/maps/place/Ashirwad+old+age+home/@18.4534474,73.7982161,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc295cab56d78bb:0xa8af2f7f7b812285!8m2!3d18.4534474!4d73.7982161!16s%2Fg%2F11k9bl27qf?hl=en-IN&entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D'
              className='btn btn--outline'
              target="_blank"
              rel="noopener noreferrer"
            >
              Location
            </a>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
