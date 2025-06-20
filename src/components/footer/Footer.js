import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <>
    <div className="main-container">
        <div className="footer-container">
      <div className="topcar">
        <h2>TOP CARS</h2>
        <p>
          website to buy,sell and rent new and used cars
          <br /> with famous brands such as Bentley, Mercedes, Audi, Porshe,
          Honda ....
        </p>
        <div className="social-icons">
          <FaInstagram />
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
      <div className="detailed-container">
        <div className="carvago">
          <h3>Carvago</h3>
          <p>Buy</p>
          <p> Review</p>
          <p>Site map</p>
          <p>How it Works</p>
        </div>
        <div className="services">
          <h3>services</h3>
          <p>Delivery</p>
          <p> CarAudit</p>
          <p>Warranty</p>
          <p>Financing</p>
        </div>
        <div className="company">
          <h3>company</h3>
          <p>About us</p>
          <p> Contact us</p>
          <p>Terms of uses</p>
        </div>
      </div>
    </div>
  <div className="footer-line"></div>
    </div>
    
    </>
    
  );
}

export default Footer;
