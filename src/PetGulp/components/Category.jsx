import React from "react";
import "../assets/css/Category.css";
import { category1, category2 } from "../data";

const Category = () => {
  return (
    <section className="category" id="collections">
      <h1 className="sectionHeader">
        <span>Top</span> Categories
      </h1>
      <div className="categoryCont1">
        {category1.map((cat1) => (
          <div className="cat1Box" key={Math.random()}>
            <div className="imgHolder">
              <img src={cat1.pic} alt="" />
            </div>
            <p>{cat1.title}</p>
          </div>
        ))}
      </div>

      <div className="categoryCont2">
        {category2.map((cat2) => (
          <div className="cat2Box" key={Math.random()}>
            <img src={cat2.pic} alt="" />
            <div className="cat2BoxContent">
              <p>{cat2.subtitle}</p>
              <h2>
                {cat2.title} <span>{` ${cat2.titleSpan}`}</span>
              </h2>
              <button className="primBtn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
