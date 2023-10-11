import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../App";

const Login = () => {
  const navigate = useNavigate();
  const { userData, setIslogin } = useContext(MyContext);
  const initialValues = { username: "", email: "", password: "" };
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span className="login-span-btn" onClick={() => handleClic()}>
            Login
          </span>
          <Link to="/adminlogin">
            <button>ADMIN</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
