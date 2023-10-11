import React, { useContext, useState } from "react";
import { MyContext } from "../App";
import { Form } from "react-bootstrap";

const AdminUser = () => {
  const { userData } = useContext(MyContext);
  const [searchdata, setSearchdata] = useState("");
  const handleChange = (e) => {
    setSearchdata(e.target.value);
  };

  return (
    <div>
      <div>
        <h1 style={{ background: "#C0C0C0", borderBottom: "2px solid black" }}>
          Registered User Data
        </h1>
      </div>
      <div>
        <Form.Control
          onChange={handleChange}
          type="text"
          name="search"
          style={{ textAlign: "center" }}
          value={searchdata}
          placeholder="Search Users"
        />
      </div>

      <div style={{ background: "#ADD8E6", border: " 2px solid black " }}>
        {userData
          .filter((data) => {
            // Return true or false based on the condition
            return data.username
              .toLowerCase()
              .includes(searchdata.toLowerCase());
          })
          .map((item) => {
            return (
              <div
                style={{
                  border: "2px solid white",
                  marginTop: "3px",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  background: "black",
                  color: "white",
                  height: "60px",
                }}
              >
                <div>
                  {" "}
                  <h4> Username : {item.username}</h4>
                </div>
                <div>
                  <h4> Email: {item.email}</h4>
                </div>
                <div>
                  <h4>Password : {item.password}</h4>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AdminUser;
