import React from "react";
import "../assets/css/CTA.css";
import banner from "../assets/images/cta-banner.png";
import icon from "../assets/images/cta-icon.png";

const CTA = () => {
  return (
    <section className="cta">
      <div className="ctaCat">
        <img src={banner} alt="" />
      </div>
      <div className="ctaContent">
        <img src={icon} className="ctaIcon" alt="" />
        <h2>Taste it, love it or we’ll replace it… Guaranteed!</h2>
        <p>
          At Petio, we believe your dog and cat will love their food so much
          that if they don’t … we’ll help you find a replacement. That’s our
          taste guarantee.
        </p>
        <button className="primBtn">Find Out More</button>
      </div>
    </section>
  );
};

export default CTA;
