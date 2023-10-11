import React from "react";
import "./Mainpage.css";
import { Link } from "react-router-dom";

const Mainpage = () => {
  return (
    <div className="mainpage-container">
      <div className="mainpage-shoe">
        <img
          className="mainpage-img"
          src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-hero-image-bg.jpg"
          alt="Mainpage shoe pic"
        />
        <div className="mainpage-maintext">
          <div className="mainpage-textpar">
            <h1>Love the Planet</h1>
            <h1> we walk on</h1>
          </div>
          <div className="mainpage-textbox">
            <p>Bibendum fermentum, aenean donec pretium aliquam blandit</p>
            <p> tempor imperdiet arcu arcu ut nunc in dictum mauris at ut</p>
            <div className="mainpage-textbox-shop">
              <Link to="/men" className="shop-link-style">
                <span
                  className="mainpage-shopmen-span"
                  style={{ fontWeight: "bolder" }}
                >
                  SHOP MEN
                </span>
              </Link>
              <Link to="/women" className="shop-link-style">
                <span
                  className="mainpage-shopwomen-span"
                  style={{ fontWeight: "bolder" }}
                >
                  SHOP WOMEN
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
