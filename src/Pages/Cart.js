import React, { useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import { MyContext } from "../App";
import { Button } from "react-bootstrap";
import CartItem from "../Components/CartItem";

const Cart = () => {
  const { carddata, Setcarddata } = useContext(MyContext);

  const calculateTotalAmount = (items) => {
    return items.reduce((total, item) => total + Number(item.price), 0);
  };

  useEffect(() => {
    calculateTotalAmount(carddata);
  }, [carddata]);
  const { total, setTotal } = useContext(MyContext);
  setTotal(calculateTotalAmount(carddata).toFixed(2));

  const handleRemoveItem = (itemId) => {
    const updatedCardData = carddata.filter((item) => item.id !== itemId);
    console.log(updatedCardData.length);
    Setcarddata(updatedCardData);
  };

  return (
    <div>
      {/* <div style={{ background: "grey" }}>
        <h1> CART PAGE </h1>
      </div> */}
      <div
        className="cart-container"
        style={{ background: "#DCDCDC", margin: "50px", height: "600px" }}
      >
        <h1>Shopping Cart</h1>
        <div
          style={{
            background: "black",
            color: "white",
            display: "flex",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          <p>Items in Cart : {carddata.length}</p>{" "}
          {/* Display the count here */}
        </div>
        <div>
          <ul
            style={{
              listStyle: "none",
              background: "#B0E0E6",
              fontSize: "20px",
            }}
          >
            {carddata.map((item) => (
              <CartItem
                image={item.imgpath}
                name={item.name}
                price={item.price}
                handleRemoveItem={handleRemoveItem}
                id={item.id}
              />
            ))}
          </ul>
        </div>
        <div
          style={{
            background: "black",
            color: "white",
            display: "flex",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          <p>Total Price: ${total}</p> {/* Display the total price here */}
          <Link to="/checkout">
            <Button
              style={{
                marginLeft: "350px",
                background: "green",
                color: "white",
                fontSize: "20px",
                fontWeight: "bolder",
              }}
            >
              {" "}
              CHECK OUT{" "}
            </Button>
          </Link>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/">
            <button
              style={{
                background: "#556B2F",
                color: "white",
                fontSize: "20px",
                fontWeight: "bolder",
              }}
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
