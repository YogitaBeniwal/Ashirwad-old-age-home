import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="bg-light"> {/* Added light grey background */}
      <div className="footer-top py-5"> {/* Added padding for better spacing */}
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-links">
              <h4 className="text-uppercase font-weight-bold">Quick Links</h4> {/* Improved styling */}
              <ul className="list-unstyled small"> {/* Removed default list styling */}
                <li><Link to="/about" className="text-dark">About Us</Link></li> {/* Dark text for better contrast */}
                <li><Link to="/contact-us" className="text-dark">Contact Us</Link></li>
                <li><Link to="/products" className="text-dark">Products</Link></li>
                <li><Link to="/donate" className="text-dark">Donate</Link></li>
                <li><a 
                    href="https://www.google.com/maps/place/Ashirwad+old+age+home/@18.4534474,73.7982161,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc295cab56d78bb:0xa8af2f7f7b812285!8m2!3d18.4534474!4d73.7982161!16s%2Fg%2F11k9bl27qf?hl=en-IN&entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-dark"
                  >
                    Location
                  </a>
                </li>
                  </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact" style={{ marginRight: '20px' }}> 
              {/* <h4 className="text-uppercase font-weight-bold">Contact Us</h4> */}
              <address>
                <p className="text-dark"> {/* Dark text for address */}
                  Sr no 145, dk hotel dalvi wadi,
                  Sinhgad Rd, Nanded Fata,
                  Pandurang Industrial Area, Nanded,
                  Pune, Maharashtra 411041
                </p>
                <p className="text-dark">
                  <strong>Phone:</strong> +91 9545843549<br />
                  <strong>Email:</strong> ashirwadoldage@gmail.com
                </p>
              </address>
            </div>

            
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container-fluid py-3" style={{ backgroundColor: '#333' }}> {/* Dark background for copyright */}
        <div className="copyright text-center text-light small"> {/* Light text for copyright */}
          &copy; Copyright <strong><span>Ashirwad Old Age Home</span></strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
