import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './header.css'; 
import logo from '../../assests/logo.png';
const Header = () => {
  return (
    <header className="header">
  
      <div className="header-section">
        <img 
          src={logo} 
          alt="Golden Auto Enterprises" 
          className="logo"
        />
      </div>

      <nav className="header-section nav-links">
        <Link to="/">Home</Link>
        <Link to="/listing">Listing</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="header-section icon">
        <FaUserCircle />
      </div>
    </header>
  );
};

export default Header;
