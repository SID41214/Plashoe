import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Mainpage from "../Components/Mainpage";
import Footer from "../Components/Footer";
import LogoList from "../Components/LogoList";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Mainpage />
      <LogoList />
      <div className="home-blogo" style={{ display: "flex" }}>
        <div className="home-blogo-left">
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-home-about-image.jpg"
            alt=""
          />
        </div>

        <div className="home-blogo-right" style={{ margin: "10px" }}>
          <h4 style={{ color: "orange", marginLeft: "100px" }}>ABOUT US</h4>
          <div style={{ marginLeft: "50px", marginTop: "50px" }}>
            <h1 style={{ fontSize: "50px" }}>
              Selected materials <br />
              designed for comfort
              <br />
              and sustainability
            </h1>

            <h2 style={{ color: "grey", marginTop: "50px" }}>
              Nullam auctor faucibus ridiculus dignissim <br />
              sed et auctor sed eget auctor nec sed elit nunc,
              <br />
              magna non urna amet ac neque ut quam enim ,<br />
              pretium risus gravida ullamcorper adipiscing at ut magna.
            </h2>
            <Link to="/">
              <h3
                style={{
                  color: "orange",
                  marginTop: "100px",
                  textDecoration: "none",
                }}
              >
                READ MORE
              </h3>
            </Link>
          </div>
          <div>
            {/* continue from here............................................................................................. */}
          </div>
        </div>
      </div>
      <Footer />
      {/* <Checkout/> */}
    </div>
  );
};

export default Home;
