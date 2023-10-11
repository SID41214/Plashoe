import React, { useState, useContext } from "react"; //useEffect
import "./Registration.css";
import Login from "./Login";
import { Link } from "react-router-dom"; //useNavigate
import { MyContext } from "../App";
// import { type } from "@testing-library/user-event/dist/type";

const Registration = () => {
  const { setUserdata } = useContext(MyContext); //userdata
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // const Navigate=useNavigate();
  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    // console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const handleClick = () => {
    setUserdata((prev) => [
      ...prev,
      {
        username: formValues.username,
        email: formValues.email,
        password: formValues.password,
      },
    ]);
  };

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //     // Navigate("/login")

  //   }
  // }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    // const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
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
          Username is required !
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
          Email is required !
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
          Password is required !
        </span>
      );
    }
    return errors;
  };
  //  function Submit(){
  //     if(name === ""){
  //         alert("input name")
  //     }
  //  }

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
          Signed in Successfull -- Login To Continue
        </div>
      ) : null
      // <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      }

      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div className="ui-divider"></div>
        <div className="ui-form">
          <div className="field">
            {/* <label>Username:</label> */}
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
            {/* <label>Email:</label> */}
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
            {/* <label>Password:</label> */}
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
              onClick={() => handleClick()}
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
            <Link
              to="/login"
              element={<Login />} className="link-span"
           
            >
              Login
            </Link>{" "}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Registration;
