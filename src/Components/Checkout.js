import React, { useContext } from "react";
import "./Checkout.css";
import { MyContext } from "../App";
import LockIcon from "@mui/icons-material/Lock";
const Checkout = () => {
  const { total } = useContext(MyContext);
  const handlebutton=(e)=>{
    e.preventDefault();
  };

  return (
    <div>
      {/* <div style={{ background: "grey", textAlign: "center" }}>
        <h1>PLASHOE PAYMENT SECTION </h1>
      </div> */}
      <br />
      <br />
      <br />
      <div style={{ textAlign: "center",fontFamily: "sans-serif",
          fontSize: "40px",
          marginBottom: "40px",color:"#6e7051" }}>
        <h1>CHECK OUT </h1>
      </div>
      <div className="checkout-container">
        <div className="checkout-left">
          <form className="checkout-left-form" style={{ margin: "100px" }}>
            <label style={{ fontSize: "30px" }}>Customer information</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Username or Email "
            />
            <br />
            <br />

            <label style={{ fontSize: "30px" }}>Billing details</label>
            <div style={{ display: "flex" }}>
              <input type="text" name="name" placeholder="First name" />
              <input type="text" name="name" placeholder="Last name " />
            </div>
            <br />
            <input type="text" name="name" placeholder="Company Name" />
            <br />
            <br />
            <select style={{ width: "100%" }}>
              <option value="">Select Country</option>
              <option value="option1">India</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option3">Option 4</option>
              <option value="option3">Option 5</option>
            </select>
            <br />
            <br />
            <textarea
              id="myTextArea"
              name="comments"
              rows="4"
              cols="180"
              placeholder="Enter Valid Address"
            ></textarea>
            <br />
            <br />
            <input
              type="number"
              name="name"
              placeholder="Enter Contact Number"
            />
            <br />
            <br />
            <h3>Additional information</h3>
            <textarea
              id="myTextArea"
              name="comments"
              rows="4"
              cols="180"
              placeholder="Additional info..Land marks.."
            ></textarea>
            <br />
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button onClick={handlebutton}
                style={{
                  background: "green",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bolder",
                  width: "300px",
                }}
              >
                <LockIcon /> PLACE ORDER ${total}
              </button>
            </div>
          </form>
        </div>
        <div className="checkout-right"></div>
      </div>
    </div>
  );
};

export default Checkout;
