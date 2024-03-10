import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Kaspa-LDSP-Dark-Full-Color.svg";
import "./Navbar.css";

const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className={`links-section ${showNavLinks ? "show" : ""}`}>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="button-section">
        <button className="cta-button">Get Started</button>
      </div>
      <button className="hamburger-menu" onClick={toggleNavLinks}>
        &#9776;
      </button>
    </nav>
  );
};

export default Navbar;
