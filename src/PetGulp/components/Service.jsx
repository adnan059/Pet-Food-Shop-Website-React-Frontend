import React from "react";
import "../assets/css/Service.css";
import serviceImg from "../assets/images/service-image.png";

import { serviceData } from "../data";

const Service = () => {
  return (
    <section className="service">
      <img src={serviceImg} className="serviceImage" alt="" />

      <h1 className="sectionHeader">
        <span>What Your Pet Needs,</span> When They Need it
      </h1>

      <div className="serviceContainer">
        {serviceData.map((service, i) => (
          <div className="serviceBox" key={i}>
            <img src={service.pic} alt="" />
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
