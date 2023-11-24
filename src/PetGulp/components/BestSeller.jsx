import React from "react";
import "../assets/css/BestSeller.css";
import { bestSeller } from "./../data";

const BestSeller = () => {
  const ratify = (num) => {
    let arr = [];

    for (let i = 0; i < num; i++) {
      arr.push(
        <i
          className="fa-solid fa-star"
          style={{ color: "orange" }}
          key={Math.random()}
        ></i>
      );
    }

    if (5 > num) {
      const rest = 5 - num;
      for (let j = 0; j < rest; j++) {
        arr.push(<i className="fa-solid fa-star" key={Math.random()}></i>);
      }
    }
    return arr;
  };

  return (
    <section className="bestSeller" id="shop">
      <h1 className="sectionHeader">
        <span>Best</span> Seller
      </h1>
      <div className="bSellerCont">
        {bestSeller.map((bslr, i) => (
          <div className="bSellerBox" key={i}>
            <i className="fa-solid fa-square-plus addtocart"></i>
            <img
              src={bslr.frontPic}
              alt=""
              className="bslrImage"
              onMouseOver={(e) => (e.target.src = bslr.backPic)}
              onMouseOut={(e) => (e.target.src = bslr.frontPic)}
            />

            <div className="productContent">
              <div className="rating">{ratify(bslr.stars)}</div>
              <h2 className="productTitle">{bslr.title}</h2>
              <p className="productPrice">${bslr.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
