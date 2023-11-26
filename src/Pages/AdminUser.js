import React, { useContext, useState } from "react";
import { MyContext } from "../App";
import { Form } from "react-bootstrap";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const AdminUser = () => {
  const { userData } = useContext(MyContext);
  const [searchdata, setSearchdata] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setSearchdata(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div style={{ background: "#C0C0C0", borderBottom: "2px solid black", padding: "10px" }}>
        <h1 style={{ margin: 0, fontSize: "24px" }}>Registered User Data</h1>
      </div>
      <div style={{ textAlign: "center", margin: "10px 0" }}>
        <Form.Control
          onChange={handleChange}
          type="text"
          name="search"
          value={searchdata}
          placeholder="Search Users"
        />
      </div>

      <div style={{ background: "#ADD8E6", border: "2px solid black" }}>
        {userData
          .filter((data) => data.username.toLowerCase().includes(searchdata.toLowerCase()))
          .map((item, index) => (
            <div
              key={index}
              style={{
                border: "2px solid white",
                margin: "10px",
                padding: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "black",
                color: "white",
                borderRadius: "8px",
              }}
            >
              <div>
                <h4 style={{ margin: 0, fontSize: "18px" }}>Username: {item.username}</h4>
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: "18px" }}>Email: {item.email}</h4>
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: "18px" }}>
                  Password:{" "}
                  {showPassword ? item.password : "*".repeat(item.password.length)}
                  <span
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                      fontSize: "24px",
                      color: "#61dafb",
                    }}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </span>
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdminUser;
