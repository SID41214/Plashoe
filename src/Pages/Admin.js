import React from "react";
import "./Admin.css";
import HomeIcon from "@mui/icons-material/Home";
import styled from "styled-components";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import PersonIcon from "@mui/icons-material/Person";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Link, Outlet } from "react-router-dom";
const Adminright = styled.div`
  flex: 10;
  /* height:60px; */
  margin-top: 20px;
  height: 100vh;
  overflow: scroll;
`;
const Adminleft = styled.div`
  flex: 2;
  background: black;
  color: white;
  display: flex;
  height: 100vh;
  flex-direction: column;
`;
const Admin = () => {
  return (
    <div style={{ display: "flex" }}>
      <Adminleft>
        <h1
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "30px",
            fontWeight: "600",
          }}
        >
          Admin
        </h1>
        <div
          className="admin-link"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "50px",
          }}
        >
          <Link
            to="/admin/user"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            <div
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bolder",
                margin: "15px",
                
              }}onMouseEnter={(e) => (e.target.style.color = "black")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              <PersonIcon style={{ color: "white" }} /> Users
            </div>
          </Link>
          <Link
            to="/admin/products"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            <div
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bolder",
                margin: "15px",
              }}onMouseEnter={(e) => (e.target.style.color = "black")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              <ViewHeadlineIcon style={{ color: "white" }} /> Products
            </div>
          </Link>
          <Link
            to="/admin/revenue"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            <div
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bolder",
                margin: "15px",
              }}onMouseEnter={(e) => (e.target.style.color = "black")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              <MonetizationOnIcon style={{ color: "white" }} /> Revenue
            </div>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            {" "}
            <div
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bolder",
                margin: "15px",
              }}onMouseEnter={(e) => (e.target.style.color = "black")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              <HomeIcon style={{ color: "white" }} />
              Home
            </div>
          </Link>
        </div>
      </Adminleft>
      <Adminright>
        <h1>
          {" "}
          Hello , Sidheeque <WavingHandIcon style={{ color: "#FFD700" }} />
        </h1>
        <p style={{ marginTop: "20px", borderBottom: "2px solid black" }}></p>

        <Outlet />
      </Adminright>
    </div>
  );
};

export default Admin;
