import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const Admindata = { username: "sid", password: "1234" };
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const adminClick = () => {
    if (!formValues.username || !formValues.password) {
      alert("Please Enter Valid Data");
      // navigate("/adminlogin")
    } else {
      if (
        formValues.username === Admindata.username &&
        formValues.password === Admindata.password
      ) {
        alert("Login Successfully");
        navigate("/admin");
      } else {
        alert("Invalid Credentials");
      }
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: " #808080",
      }}
    >
      <form className="login-form">
        <h1> Admin Login</h1>
        {/* <label>Username:</label><br/> */}
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
          placeholder="Enter Username"
        />{" "}
        <br />
        {/* <label>Password:</label><br/> */}
        <br />
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Enter Password"
        />
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "black",
            color: "Gainsboro",
            width: "150px",
            font: "600",
            fontWeight: "800",
            height: "40px",
            border: "solid",
            borderWidth: "2px 4px ",
            borderRadius: "40px",
            textAlign: "center",
            marginLeft: "130px",
          }}
        >
          <span
            className="login-span-btn"
            style={{ cursor: "pointer" }}
            onClick={() => adminClick()}
          >
            Login
          </span>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
