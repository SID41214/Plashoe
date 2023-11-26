import React, { useState, useContext } from "react";
import "./Registration.css";
// import Login from "./Login";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../App";

const Registration = () => {
  const navigate = useNavigate();
  const { setUserdata } = useContext(MyContext);
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setIsSubmit(true);

    if (Object.keys(errors).length === 0) {
      setUserdata((prev) => [
        ...prev,
        {
          username: formValues.username,
          email: formValues.email,
          password: formValues.password,
        },
      ]);

      setFormValues(initialValues);

      setTimeout(() => {
        alert("Registered Successfully -- Login To Continue");
        navigate("/login");
      }, 100);
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = (
        <span
          style={{
            color: "red",
            fontWeight: "bolder",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Username is required!
        </span>
      );
    }
    if (!values.email) {
      errors.email = (
        <span
          style={{
            color: "red",
            fontWeight: "bolder",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Email is required!
        </span>
      );
    }
    if (!values.password) {
      errors.password = (
        <span
          style={{
            color: "red",
            fontWeight: "bolder",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Password is required!
        </span>
      );
    }
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div
          className="ui message success"
          style={{
            fontSize: "20px",
            fontWeight: "bolder",
            color: "white",
            background: "black",
            width: "400px",
            textAlign: "center",
            border: "solid",
            borderWidth: "2px 4px",
            borderRadius: "40px",
            marginBottom: "10px",
          }}
        >
          Registered Successfully -- Login To Continue
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div className="ui-divider"></div>
        <div className="ui-form">
          <div className="field">
            <br />
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <br />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>

          <div className="field">
            <br />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>

          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              className="span-btn"
              type="submit"
              style={{ cursor: "pointer" }}
            >
              Register
            </button>
          </div>
          <br />
          <span
            style={{
              fontWeight: "bolder",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Already Have an Account ?{" "}
            <Link to="/login" className="link-span">
              Login
            </Link>{" "}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Registration;
