import React from "react";
import ReactPlayer from "react-player";
import "./Ourstory.css";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Ourstory = () => {
  return (
    <div>
      {/* <div style={{ background: "grey" }}>
        <h1> OUR STORY PAGE </h1>
      </div> */}
      <Navbar />
      <div
        className="os-lk"
        style={{
          fontFamily: "sans-serif",
          fontSize: "40px",
          marginBottom: "40px",
        }}
      >
        <h1 style={{color:"#6e7051"}}>Our Story</h1>
        <h5 style={{ textAlign: "center", fontFamily: "serif" }}>
          Taking a stylish and sustainable footwear <br />
          with a focus on creating a positive impact <br />
          on both the world and the people
        </h5>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ReactPlayer url="https://www.youtube.com/watch?v=lky2P_aw6nc" />
      </div>
      <div
        className="os-vid-dis"
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "100px",
        }}
      >
        <div>
          <h1 style={{color:" #6e7051"}}>Ethics and equality</h1>
          <p>
            Pellentesque quam convallis massa enim,
            <br /> faucibus ornare sollicitudin gravida justo sit
            <br /> suspendisse pellentesque.
          </p>
        </div>
        <div>
          <h1 style={{color:" #6e7051"}}>Eco-design</h1>
          <p>
            Risus leo molestie a aliquam amet urna orci <br />
            nisl dignissim elementum nibh felis ultrices
            <br /> vitae consectetur.
          </p>
        </div>
        <div>
          <h1 style={{color:" #6e7051"}}>Wildlife Preservation</h1>
          <p>
            Pellentesque nunc ante augue adipiscing
            <br /> sed suspendisse amet sed pellentesque
            <br /> convallis erat nibh vivamus.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Ourstory;
