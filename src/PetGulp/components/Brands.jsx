import React from "react";
import "../assets/css/Brands.css";
import br1 from "../assets/images/brand-1.jpg";
import br2 from "../assets/images/brand-2.jpg";
import br3 from "../assets/images/brand-3.jpg";
import br4 from "../assets/images/brand-4.jpg";
import br5 from "../assets/images/brand-5.jpg";

const Brands = () => {
  return (
    <section className="brands">
      <h1 className="sectionHeader">
        <span>Popular</span> Brands
      </h1>
      <div className="brandsCont">
        <img src={br1} alt="" />
        <img src={br2} alt="" />
        <img src={br3} alt="" />
        <img src={br4} alt="" />
        <img src={br5} alt="" />
      </div>
    </section>
  );
};

export default Brands;
