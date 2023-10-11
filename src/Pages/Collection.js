import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import WindowIcon from "@mui/icons-material/Window";
import ViewListIcon from "@mui/icons-material/ViewList";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./Men.css";
import { MyContext } from "../App";

const Collection = () => {
  const { islogin, allproducts, setAllproducts, searchTerm } =
    useContext(MyContext);
  const [duplicateData, setDuplicateData] = useState(allproducts);

  useEffect(() => {
    function filterShoeData() {
      if (searchTerm === "") {
        setAllproducts(allproducts);
      } else {
        const result = allproducts.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setDuplicateData(result);
      }
    }

    filterShoeData();
  }, [searchTerm, allproducts, setAllproducts]);
  const { carddata, Setcarddata } = useContext(MyContext);

  const Addtocart = (itemToAdd) => {
    if (!islogin) {
      alert("Login to add shoes");
    } else {
      const existingItem = carddata.find((item) => item.id === itemToAdd.id);

      if (existingItem) {
        // If the item already exists in the cart, update the quantity
        const updatedCardData = carddata.map((item) =>
          item.id === itemToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        Setcarddata(updatedCardData);
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        const updatedCardData = [...carddata, { ...itemToAdd, quantity: 1 }];
        Setcarddata(updatedCardData);
      }

      alert("Item Added to Cart");
    }
  };

  return (
    <div>
      {/* <div style={{ background: "grey" }}>
        <h1> COLLECTION PAGE</h1>
      </div> */}
      <Navbar />
      <div className="men-men">
          <h1>SHOP</h1>
        </div>

      <div className="men-navbar">
        <div className="men-navbar-left">
          <h2>
            <DensityMediumIcon />
            FILTER SHOES
          </h2>
        </div>
        <div className="men-navbar-right">
          <label className="men-sort">
            <select
              name="default-sort"
              style={{ fontSize: "22px", marginRight: "20px" }}
            >
              <option value="Default Sorting">Default Sorting</option>
              <option value="Sort by Popularity">Sort by Popularity</option>
              <option value="Sort by avg">Sort by Average Rating</option>
              <option value="Sort by pl">Sort by Price: Low to High</option>
              <option value="Sort by ph">Sort by Price: High to Low</option>
            </select>
          </label>
          <WindowIcon />
          <ViewListIcon />
        </div>
      </div>

      <div className="men-card-container">
        <div
          className="men-card-box"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {duplicateData.map((item) => {
            return (
              <Card
                key={item.id}
                style={{ width: "367px" }}
                className="men-card"
              >
                <Card.Img
                  variant="top"
                  className="men-card-img"
                  src={item.imgpath}
                  alt=" menshoe"
                />
                <Card.Body>
                  <div style={{ display: "flex" }}>
                    <Button variant="primary" className="men-card-button">
                      Quick View
                    </Button>
                    <Button
                      variant="primary"
                      className="men-card-button"
                      style={{ width: "200px" }}
                      onClick={() => Addtocart(item)}
                    >
                      <span className="add-to-cart-text">Add To Cart</span>{" "}
                    </Button>
                  </div>
                  <Card.Title
                    style={{
                      textAlign: "center",
                      fontSize: "larger",
                      fontWeight: "600",
                    }}
                  >
                    {item.name}
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center", fontWeight: "600" }}>
                    ${item.price}
                  </Card.Text>
                  <Card.Text style={{ textAlign: "center", fontWeight: "600" }}>
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Collection;
