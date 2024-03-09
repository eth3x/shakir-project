import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src="https://kaspa.org/wp-content/uploads/2023/08/Kaspa-LDSP-Dark-Full-Color.svg" alt="Logo" className="logo" />
      </div>
      <div className="links-section">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
      <div className="button-section">
        <button className="cta-button">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;

