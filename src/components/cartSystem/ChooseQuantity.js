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
const Select = styled.select`
  color: ${COLOR.text_2};
  font-size: ${FONT.sm};
  border-color: ${COLOR.text_2};
  outline: none;
  border-radius: 7px;
  padding: 6px 20px;
`;

export default function ChooseQuantity({ Items }) {
  const dispatch = useDispatch();
  const { carts, errorMessage, isLoading } = cartOrder();
  return (
    <Select name="數量">
      <option value={Items.quantity}>{Items.quantity}</option>
    </Select>
  );
}
