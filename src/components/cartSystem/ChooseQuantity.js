import styled from "styled-components";
import React, { useEffect } from "react";
import { IconComponent } from "../../components";
import { COLOR, FONT, DISTANCE, MEDIA_QUERY_MD } from "../../constants/style";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import cartOrder from "../../hooks/cartHooks/useCart";
import {
  getCartItem,
  updateCartItem,
  deleteCartItem,
  deleteCartItemsBySeller,
} from "../../redux/slices/cartSlice/cartSlice";
const Quantity = styled.p`
  color: ${COLOR.text_2};
  font-size: ${FONT.sm};
  border: solid 1px #f1f1f1;
  outline: none;
  border-radius: 7px;
  padding: 6px 20px;
`;
const Wrapper = styled.div`
  display: flex;

`;

export default function ChooseQuantity({ Items }) {
  const dispatch = useDispatch();
  const { carts, errorMessage, isLoading } = cartOrder();
 
  return (
    <Wrapper>
      <IconComponent kind={"minus"} />
      <Quantity>{Items.cartQuantity}</Quantity>
      <IconComponent kind={"plus"} />
    </Wrapper>
  );
}
