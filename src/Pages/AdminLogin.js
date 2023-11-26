import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css"

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
    <div className="admin-login-container">
      <form className="admin-login-form">
        <h1>Admin Login</h1>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
          placeholder="Enter Username"
        />
        <br />
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Enter Password"
        />
        <br />
        <div className="admin-login-buttons">
          <span
            className="admin-login-span-btn"
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
