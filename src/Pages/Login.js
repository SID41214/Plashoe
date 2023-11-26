import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../App";

const Login = () => {
  const navigate = useNavigate();
  const { userData, setIslogin } = useContext(MyContext);
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const filterdata = userData.filter(
    (item) => item.username === formValues.username
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleClic = () => {
    if (filterdata.length === 0 || filterdata[0].password === "") {
      alert("Please Enter Valid Data");
      navigate("/login");
    } else {
      if (formValues.password === filterdata[0].password) {
        alert("Login Successfully");
        setIslogin(true);
        navigate("/");
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <Link to={"/register"} className="register-link">
          Create a New Account ?
        </Link>
        <div className="login-buttons">
          <span className="login-span-btn" onClick={() => handleClic()}>
            Login
          </span>
          <Link to="/adminlogin" className="admin-link">
            Admin
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
