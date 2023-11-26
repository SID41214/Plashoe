// CartItem.js

import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MyContext } from "../App";

const Container = styled.div`
  background-color: white;
  margin: 20px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
`;
const Img = styled.img`
  width: 50px;
`;
const Name = styled.h4``;
const Price = styled.h5``;
const CounterButton = styled.div``;
const Increment = styled.button`
  padding: 20px;
`;
const Decrement = styled.button`
  padding: 20px;
`;
const Remove = styled.button``;

const CartItem = ({ name, image, price, id, updateTotalPrice }) => {
  const { carddata, Setcarddata } = useContext(MyContext);
  const [count, setCount] = useState(1);

  const updateData = () => {
    const updatedCart = carddata.map((item) =>
      item.id === id ? { ...item, quantity: count } : item
    );
    Setcarddata(updatedCart);
    updateTotalPrice(); // Update the total price in the parent component
  };

  const totalPrice = (price * count).toFixed(2);

  const handleRemove = () => {
    Setcarddata((prevCardData) => {
      const updatedCardData = prevCardData.filter((item) => item.id !== id);
      updateTotalPrice(); // Update the total price after removing the item
      return updatedCardData;
    });
  };

  return (
    <Container>
      <Img src={image} />
      <Name>{name}</Name>
      <Price>${price.toFixed(2)}</Price>
      <CounterButton>
        <Increment
          onClick={() => {
            setCount((prevCount) => {
              const newCount = prevCount + 1;
              updateData();
              return newCount;
            });
          }}
        >
          +
        </Increment>
        {count}
        <Decrement
          onClick={() => {
            setCount((prevCount) => {
              const newCount = prevCount > 1 ? prevCount - 1 : prevCount;
              updateData();
              return newCount;
            });
          }}
        >
          -
        </Decrement>
      </CounterButton>
      <div>
        <p>Total: ${totalPrice}</p>
      </div>
      <Remove
        onClick={() => {
          handleRemove();
        }}
        style={{ background: "red", color: "white", fontSize: "20px" }}
      >
        Remove
      </Remove>
    </Container>
  );
};

export default CartItem;
