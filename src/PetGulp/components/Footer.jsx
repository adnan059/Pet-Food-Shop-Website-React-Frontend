import React from "react";
import "../assets/css/Footer.css";
import payment from "../assets/images/payment.png";

const Footer = () => {
  return (
    <section className="footer" id="contact">
      <div className="footerCont">
        <div className="footerCont1">
          <a href="#home" className="logo">
            PetGulp
          </a>
          <p>
            if you have any query, please contact us at
            <span>support@abcd.com</span>
          </p>
          <p>
            <i className="fa-solid fa-location-dot"></i> 23/6 Parkinson St, FL,
            USA
          </p>
          <p>
            <i className="fa-solid fa-phone"></i> +1234XX5789
          </p>

          <div className="contactIcons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </div>

        <div className="footerCont2 ftc">
          <p>Corporate</p>
          <a href="#career">Career</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#faq">FAQ</a>
          <a href="#vendors">Vendors</a>
          <a href="#ap">Affiliate Programme</a>
        </div>

        <div className="footerCont3 ftc">
          <p>Information</p>
          <a href="#os">Online Store</a>
          <a href="#pp">Privacy Policy</a>
          <a href="#rp">Refund Policy</a>
          <a href="#sp">Shipping Policy</a>
          <a href="#ts">Terms of Service</a>
          <a href="#to">Track Order</a>
        </div>

        <div className="footerCont4 ftc">
          <p>Services</p>
          <a href="#grm">Grooming</a>
          <a href="#pdt">Positive Dog Training</a>
          <a href="#vs">Veterinary Services</a>
          <a href="#pi">Petco Insurance</a>
          <a href="#pa">Pet Adoption</a>
          <a href="#rc">Resource Center</a>
        </div>
      </div>

      <div className="cp">
        <p>
          &copy; 2023 Made by{" "}
          <a
            href="https://www.facebook.com/profile.php?id=100091858671661"
            target="_blank"
            rel="noreferrer"
          >
            Md Adnan Faruk
          </a>
        </p>

        <img src={payment} alt="" />
      </div>
    </section>
  );
};

export default Footer;
