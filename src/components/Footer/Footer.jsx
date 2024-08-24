import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      {/* top part */}
      <div className="top">
        <div className="left">
            <div className="item-categories">
            <h3>Categories</h3>
            <Link to={"/products/1"}>Men</Link>
            <Link to={"/products/2"}>Women</Link>
            <Link to={"products/3"}>Children</Link>
            <Link to={"products/4"}>Accessories</Link>
          </div>

          <div className="links">
            <h3>Links</h3>
            <Link to={""}>FAQ</Link>
            <Link to={""}>Pages</Link>
            <Link to={""}>Stores</Link>
            <Link to={""}>Compare</Link>
            <Link to={""}>Cookies</Link>
          </div>
        </div>

    <div className="right">
          <div className="about">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              fuga aliquam praesentium natus velit, suscipit delectus porro ea
              corporis pariatur!
            </p>
          </div>

          <div className="about">
            <h3>Contact</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              fuga aliquam praesentium natus velit, suscipit delectus porro ea
              corporis pariatur!
            </p>
          </div>
        </div>
    </div>


      {/* bottom part */}
      <div className="bottom">
        <div className="authority">
          <Link to={'/'} className="logo">LAMASTORE</Link>
          <p>&#169;Copyright 2024, All rights reserved</p>
        </div>

        <div className="payment">
          <img src="/images/payment.png" alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
