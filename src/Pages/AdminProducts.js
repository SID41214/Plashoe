import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
import SearchIcon from "@mui/icons-material/Search";
import "./AdminProduct.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  const { allproducts, setAllproducts } = useContext(MyContext);

  const [duplicateData, setDuplicateData] = useState(allproducts);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    function filterShoeData() {
      if (searchTerm === "") {
        setDuplicateData(allproducts);
      } else {
        const result = allproducts.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setDuplicateData(result);
      }
    }

    filterShoeData();
  }, [searchTerm, allproducts]);

  const handleRemoveItem = (item) => {
    const Deletedata = allproducts.filter((p) => p.id !== item.id);
    setAllproducts(Deletedata);
    setDuplicateData(Deletedata);
  };
  return (
    <div>
      <div>
        <h1 style={{ background: "#C0C0C0", borderBottom: "2px solid black" }}>
          Products
        </h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <label>
          <SearchIcon />
        </label>
        <input
          type="text"
          placeholder=" Search Your Shoe Here"
          style={{ width: "200px" }}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <div>
          <Link to="/admin/addproducts">
            {" "}
            <button
              style={{
                height: "100%",
                width: "200px",
                fontSize: "15px",
                fontWeight: "bolder",
                background: " PaleGreen",
              }}
            >
              Add Products
            </button>
          </Link>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {duplicateData.map((item) => {
          return (
            <Card style={{ width: "367px" }} className="men-card">
              <Card.Img
                variant="top"
                className="men-card-img"
                src={item.imgpath}
                alt=" menshoe"
              />
              <Card.Body>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {/* <Button variant="primary" className="men-card-button" >Quick View</Button> */}
                  <Link to={`/admin/editproduct/${item.id}`}>
                    <Button
                      variant="primary"
                      className="men-card-button"
                      style={{
                        backgroundColor: "black",
                        transition: "background-color 0.3s",
                        width: "167px",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "green")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "black")
                      }
                    >
                      Edit{" "}
                    </Button>
                  </Link>
                  <Button
                    variant="primary"
                    className="men-card-button"
                    style={{
                      backgroundColor: "black",
                      transition: "background-color 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "red")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "black")
                    }
                    onClick={() => handleRemoveItem(item)}
                  >
                    Delete
                  </Button>
                  {/* <Button variant="primary" className="men-card-button"   style={{width:"200px"}} ><span className="add-to-cart-text">Add To Cart</span> </Button> */}
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
  );
};

export default AdminProducts;
