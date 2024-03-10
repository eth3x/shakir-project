import React from "react";
import HeroImage from "../../Assets/Kaspa-LDSP-Dark-Full-Color.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-parent">
        <div className="hero-left">
          <h1>Lorem</h1>
          <h2>Slider</h2>
          <p>lorem ipsum</p>
          <button>Talk To Us</button>
        </div>
        <div className="hero-right">
          <img src={HeroImage} alt="Hero "></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
