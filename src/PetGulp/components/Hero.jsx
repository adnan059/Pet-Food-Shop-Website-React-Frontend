import React from "react";
import "../assets/css/Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero" id="home">
        <div className="heroContent">
          <h1>
            <span>High Quality</span> Pet Food
          </h1>
          <p>Sale up to 30% off today</p>
          <button className="primBtn">Shop Now</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
