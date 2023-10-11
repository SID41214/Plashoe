import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="wrapper">
          <div className="plashoe">
            <h2>PLASHOE</h2>

            <p>
              Praesent eget tortor sit risus egestas nulla pharetra ornare quis
              bibendum est bibendum sapien proin nascetur
            </p>
            <ul className="icons-li">
              <li className="icons">
                <InstagramIcon />
              </li>
              <li className="icons">
                <FacebookIcon />
              </li>
              <li className="icons">
                <TwitterIcon />
              </li>
            </ul>
          </div>
          <div className="shop">
            <h3>shop</h3>
            <ul>
              <li className="shop-li">Shop Men</li>
              <li className="shop-li">Shop Women</li>
              <li className="shop-li">Lookbook</li>
              <li className="shop-li">Gift Card</li>
              <li className="shop-li">Sale</li>
            </ul>
          </div>
          <div className="about">
            <h3>About</h3>
            <ul>
              <li className="about-li">Our Story</li>
              <li className="about-li">Our Materials</li>
              <li className="about-li">Our Value</li>
              <li className="about-li">Sustainability</li>
              <li className="about-li">Manufacture</li>
            </ul>
          </div>
          <div className="needhelp">
            <h3>Need Help?</h3>
            <ul>
              <li className="needhelp-li">FAQs</li>
              <li className="needhelp-li">Shipping & Returns</li>
              <li className="needhelp-li">Shoe Care</li>
              <li className="needhelp-li">Size Chart</li>
              <li className="needhelp-li">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="underground">
        <div className="underground-left">
          <p>© 2023 Recycled Shoe Store. Powered by Recycled Shoe Store.</p>
        </div>
        <div className="underground-right">
          <img
            src="	https://websitedemos.net/recycled-shoe-store/wp-content/uploads/sites/983/2021/11/payment-icons.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
