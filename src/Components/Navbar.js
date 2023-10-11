import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import Men from "../Pages/Men";
import Women from "../Pages/Women";
import Collection from "../Pages/Collection";
import Lookbook from "../Pages/Lookbook";
import Sale from "../Pages/Sale";
import Ourstory from "../Pages/Ourstory";
import Contact from "../Pages/Contact";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Searchbox from "./Searchbox";
import { useContext } from "react";
import { MyContext } from "../App";

const Navbar = () => {
  const { carddata } = useContext(MyContext);

  return (
    <div>
      {/* style={{position:"fixed",background:"white",zIndex:"5"}} */}
      <h5 style={{ textAlign: "center", color: "grey" }}>
        Free Express Shipping on all orders with all duties included
      </h5>
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" element={<Home />}>
            <img
              style={{ marginTop: "20px" }}
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/site-logo.svg"
              alt="logo"
            />
          </Link>
          <ul className="ul-nav-left">
            <Link
              to="/men"
              element={<Men />}
              style={{ textDecoration: "none" }}
            >
              <li>MEN</li>
            </Link>
            <Link
              to="/women"
              element={<Women />}
              style={{ textDecoration: "none" }}
            >
              <li>WOMEN</li>
            </Link>
            <Link
              to="/collection"
              element={<Collection />}
              style={{ textDecoration: "none" }}
            >
              <li>COLLECTION</li>
            </Link>
            <Link
              to="/lookbook"
              element={<Lookbook />}
              style={{ textDecoration: "none" }}
            >
              <li>LOOKBOOK</li>
            </Link>
            <Link
              to="/sale"
              element={<Sale />}
              style={{ textDecoration: "none" }}
            >
              <li>SALE</li>
            </Link>
          </ul>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Searchbox />
        </div>
        <div className="nav-right">
          <ul className="ul-nav-right">
            <Link
              to="/ourstory"
              element={<Ourstory />}
              style={{ textDecoration: "none" }}
            >
              <li>OUR STORY</li>
            </Link>
            <Link
              to="/contact"
              element={<Contact />}
              style={{ textDecoration: "none" }}
            >
              <li>CONTACT</li>
            </Link>
            <Link
              to="/cart"
              element={<Cart />}
              style={{ textDecoration: "none" }}
            >
              <li style={{ display: "flex" }}>
                <ShoppingBagIcon />
                <h5
                  style={{
                    color: "white",
                    fontWeight: "bolder",
                    background: "black",
                    borderRadius: "50%",
                    height: "50%",
                  }}
                >
                  {carddata.length}
                </h5>
              </li>
            </Link>
            <li>
              {" "}
              <Link to="/register">
                <buttom>
                  <PersonIcon />
                </buttom>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
