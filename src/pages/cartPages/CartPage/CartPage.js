import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { COLOR, FONT, MEDIA_QUERY_MD,
  DISTANCE, } from "../../../constants/style";
import { ThickNavPage } from "../../../components/Page";
import { Link } from "react-router-dom";
import CartItem from "../../../components/cartSystem/CartItem"
import OrderPrice from "../../../components/cartSystem/OrderPrice";
import Check from "../../../components/cartSystem/Check";
import {
  getCartItem,
  updateCartItem,
  deleteCartItem,
  deleteCartItemsBySeller,
 
} from "../../../redux/slices/cartSlice/cartSlice";
import useCart from "../../../hooks/cartHooks/useCart";
const Title = styled.p`
  color: ${COLOR.text_2};
  font-size: ${FONT.lg};
  width: 30%;
  padding: ${DISTANCE.xs};
`;

const Container = styled.div`
  margin-top: 100px;
  min-width: 500px;
  width: 900px;
  padding: ${DISTANCE.xs};
  min-width: ${MEDIA_QUERY_MD.md};
`;

const SelectTotal = styled.label`
  margin-top: 20px;
  color: ${COLOR.btn_primary};
  font-size: ${FONT.xs};
  cursor: pointer;
  position: relative;
  border-radius: 3px;
  display: inline-block;
  padding: 5px 5px 5px 30px;
  display: flex;

`;



const CartPage = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getCartItem()), []);
  const { carts} = useCart();
  
  return (
    <>
      <ThickNavPage>
        <Container>
          <Title>購物車</Title>
            {carts && carts.map((cart, index) => <CartItem key={index} cart={cart} />)}
            <OrderPrice />
        </Container>
      </ThickNavPage>
    </>
  );
};


export default CartPage;
