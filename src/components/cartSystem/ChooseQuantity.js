import styled from "styled-components";
import React, { useEffect } from "react";
import { IconComponent } from "../../components";
import { COLOR, FONT, DISTANCE, MEDIA_QUERY_MD } from "../../constants/style";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import useCart from "../../hooks/cartHooks/useCart";
import {
  getCartItem,
  addQuantity,
  minusQuantity,
  deleteCartItem,
  setErrorMessage,
  deleteCartItemsBySeller,
  setMask,
} from "../../redux/slices/cartSlice/cartSlice";
const Quantity = styled.p`
  color: ${COLOR.text_2};
  font-size: ${FONT.sm};
  border: solid 1px #f1f1f1;
  outline: none;
  padding: 6px 20px;
`;
const Wrapper = styled.div`
  display: flex;

`;
const Container = styled.div`
  border: solid 1px #f1f1f1;
  &:hover {
    background: #f1f1f1;
  }
`;
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${COLOR.bg_mask};
  z-index: 2;
`;
const Form = styled.form`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 80px auto;
  height: 300px;
  width: 40%;
  min-width: 300px;
  border-radius: 9px;
  background: ${COLOR.white};
`;
const IconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 10px;
  margin-right: 10px;
`;

export default function ChooseQuantity({ Item }) {
  const dispatch = useDispatch();
  const { carts, errorMessage, isLoading, handleDeleteSeller } = useCart();
  const { cartItemId, cartQuantity, productQuantity } = Item;
  console.log("state 裡面存的 資料庫的數量:",cartQuantity);
  const handlePlus = () => {
    if (cartQuantity >= productQuantity) {
      dispatch(
        setErrorMessage("抱歉，本次結帳最多購買" + productQuantity + "件")
      );
      return;
    }
      dispatch(addQuantity(cartQuantity, cartItemId));
     
      //window.location.reload(true);
  };
  const handleMinus = () => {
    if (cartQuantity <= 1) {
      dispatch(setErrorMessage("抱歉，結帳最少購買1件"));
      return;
    }
      dispatch(minusQuantity(cartQuantity, cartItemId));
      window.location.reload(true);
  };
   const handleClose = () => {
       dispatch(setErrorMessage(false))
   }
  return (
    <>
      {errorMessage && (
        <Modal>
          <Form>
            <IconContainer onClick={handleClose}>
              <IconComponent kind={"close"} />
            </IconContainer>
            {errorMessage}
          </Form>
        </Modal>
      )}
      <Wrapper>
        <Container onClick={() => handleMinus(cartQuantity, cartItemId)}>
          <IconComponent kind={"minus"} />
        </Container>
        <Quantity>{Item.cartQuantity}</Quantity>
        <Container onClick={() => handlePlus(cartQuantity, cartItemId)}>
          <IconComponent kind={"plus"} />
        </Container>
      </Wrapper>
    </>
  );
}
