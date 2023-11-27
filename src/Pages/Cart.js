// Cart.js

import React, { useContext, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../App";
import { Button } from "react-bootstrap";
import CartItem from "../Components/CartItem";

const Cart = () => {
  const { carddata, Setcarddata ,setTotals} = useContext(MyContext);
  const [total, setTotal] = useState(0);

  const calculateTotalAmount = useCallback(() => {
    const totalPrice = carddata.reduce((total, item) => total + Number(item.price * (item.quantity || 1)), 0);
    setTotal(totalPrice.toFixed(2));
  }, [carddata]);

  useEffect(() => {
    calculateTotalAmount();
  }, [carddata, calculateTotalAmount]);

  const handleRemoveItem = (itemId) => {
    // Use the functional form of setCardData to ensure state updates correctly
    Setcarddata((prevCardData) => {
      const updatedCardData = prevCardData.filter((item) => item.id !== itemId);
      return updatedCardData;
    });

    // Now call calculateTotalAmount after the state has been updated
    calculateTotalAmount();
  };

  const updateTotalPrice = useCallback(() => {
    calculateTotalAmount();
  }, [calculateTotalAmount]);

  return (
    <div>
      <div className="cart-container" style={{ background: "#DCDCDC", margin: "50px", height: "600px" }}>
        <h1>Shopping Cart</h1>
        <div style={{ background: "black", color: "white", display: "flex", justifyContent: "center", fontSize: "20px", fontWeight: "bolder" }}>
          <p>Items in Cart : {carddata.length}</p>
        </div>
        <div>
          <ul style={{ listStyle: "none", background: "#B0E0E6", fontSize: "20px" }}>
            {carddata.map((item) => (
              <CartItem
                key={item.id}
                image={item.imgpath}
                name={item.name}
                price={item.price}
                handleRemoveItem={handleRemoveItem}
                id={item.id}
                updateTotalPrice={updateTotalPrice}
              />
            ))}
          </ul>
        </div>
        <div style={{ background: "black", color: "white", display: "flex", justifyContent: "center", fontSize: "20px", fontWeight: "bolder" }}>
          <p>Total Price: ${total}</p>
          <Link to="/checkout">
            <Button style={{ marginLeft: "350px", background: "green", color: "white", fontSize: "20px", fontWeight: "bolder" }} onClick={()=> (setTotals(total))}>
              CHECK OUT
            </Button>
          </Link>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/">
            <button style={{ background: "#556B2F", color: "white", fontSize: "20px", fontWeight: "bolder" }}>
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
