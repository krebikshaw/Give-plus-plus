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

const CheckBox = styled.input`
  width: 18px;
  height: 18px;
  border: 2px solid #99d8d0;
  cursor:pointer;
`;

export default function Check() {
  const dispatch = useDispatch();
  const { cart, handleToggle, errorMessage, isLoading } = cartOrder();

  return (
      <CheckBox type="checkbox"></CheckBox>
  );}
