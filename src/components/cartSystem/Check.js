import styled from "styled-components";
import React, { useEffect } from "react";
import { IconComponent } from "../../components";
import { COLOR, FONT, DISTANCE, MEDIA_QUERY_MD } from "../../constants/style";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import useCart from "../../hooks/cartHooks/useCart";
import {
  getCartItem,
  updateCartItem,
  deleteCartItem,
  deleteCartItemsBySeller,
} from "../../redux/slices/cartSlice/cartSlice";

const CheckWrapper = styled.label`
  color: #6c717b;
  font-size: 15px;
  cursor: pointer;
  position: relative;
  border-radius: 3px;
  display: inline-block;
  padding: 5px 5px 5px 30px;
  font-weight: bold;
`;
const CheckBox = styled.span`
  left: 4px;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  display: block;
  background: white;
  border-radius: 3px;
  border: 2px solid #99d8d0;
  box-shadow: 0 2px 3px #f0f4f8;
`;

export default function Check() {
  const dispatch = useDispatch();
  const { cart, handleToggle, errorMessage, isLoading } = useCart();
  handleToggle = () => {
    
  }
  return (
    <CheckWrapper>
      <CheckBox></CheckBox>
    </CheckWrapper>
  );}
