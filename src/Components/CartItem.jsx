import React, { useContext, useEffect, useMemo, useState } from "react";
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

const CartItem = ({ name, image, price, handleRemoveItem, id }) => {
  const fixedPrice = useMemo(() => price, [price]);
  const { carddata, Setcarddata } = useContext(MyContext);

  const [count, setCount] = useState(1);

  // function UpadateData(id) {
  //   const updatedCart = carddata.map((item) =>
  //     Number(item.id).toString() === Number(id).toString()
  //       ? { ...item, price: count * fixedPrice }
  //       : item
  //   );

  //   Setcarddata(updatedCart);
  // }
  // useEffect(() => {
  //   UpadateData(id);
  // }, []);
  useEffect(() => {
    function UpadateData(id) {
      const updatedCart = carddata.map((item) =>
        Number(item.id).toString() === Number(id).toString()
          ? { ...item, price: count * fixedPrice }
          : item
      );
  
      Setcarddata(updatedCart);
    }
    
    UpadateData(id);
  
  }, [carddata, Setcarddata, count, fixedPrice, id]);
  

  return (
    <Container>
      <Img src={image} />
      <Name>{name}</Name>
      <Price>${price.toFixed(2)}</Price>
      <CounterButton>
        <Increment onClick={() => setCount(count + 1)}>+</Increment>
        {count}
        <Decrement onClick={() => count > 1 && setCount(count - 1)}>
          -
        </Decrement>
      </CounterButton>
      <Remove
        onClick={() => handleRemoveItem(id)}
        style={{ background: "red", color: "white", fontSize: "20px" }}
      >
        Remove
      </Remove>
    </Container>
  );
};

export default CartItem;
