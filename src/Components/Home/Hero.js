import React, { useState, useEffect } from "react";
import HeroImage from "../../Assets/Kaspa-LDSP-Dark-Full-Color.svg";
import "./Hero.css";

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const texts = [
      "Quality Engineering",
      "Data Science",
      "Design Thinking",
      "Clean Code",
    ];
    const currentText = texts[index];
    let count = 0;

    const timer = setInterval(() => {
      count++;
      setText(currentText.substring(0, count));
      if (count === currentText.length) {
        clearInterval(timer);
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % 4);
          setText("");
        }, 1000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [index]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="hero">
      <div className="hero-parent">
        <div className="hero-left">
          <h1>Building sustainable solutions with</h1>
          <h2>
            {text}
            <span className="cursor" />
          </h2>
          <p>
            Whether you’re starting from scratch, or levelling-up an existing
            product suite, we bring experience and pragmatism that moves the
            needle on real business goals.
          </p>
          <button>Talk To Us</button>
        </div>
        <div className="hero-right">
          <img src={HeroImage} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
