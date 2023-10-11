import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div>
      {/* <div style={{ background: "grey" }}>
        <h1> CONTACT PAGE</h1>
      </div> */}
      <Navbar />
      <div className="contact-lk"
        style={{
          fontFamily: "sans-serif",
          fontSize: "40px",
          marginBottom: "40px",
        }}>
      <h1 style={{color:"#6e7051"}}>Contact Us</h1>

      </div>

      <Footer />
    </div>
  );
};

export default Contact;
