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
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/technologies" className="nav-link">
              Technologies
            </Link>
          </li>
        </ul>
      </div>
      <div className="button-section">
        <Link to="/contact">
          <button className="cta-button">Contact Us</button>
        </Link>
      </div>
      <button className="hamburger-menu" onClick={toggleNavLinks}>
        &#9776;
      </button>
    </nav>
  );
};

export default Navbar;
