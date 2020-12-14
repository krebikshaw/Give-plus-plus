import styled from "styled-components";
import React, { useEffect } from "react";
import { IconComponent } from "../../components";
import { COLOR, FONT, DISTANCE, MEDIA_QUERY_MD } from "../../constants/style";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import ChooseQuantity from "./ChooseQuantity";

import cartOrder from "../../hooks/cartHooks/useCart";
import {
  getCartItem,
  updateCartItem,
  deleteCartItem,
  deleteCartItemsBySeller,
} from "../../redux/slices/cartSlice/cartSlice";
const CartInfo = styled.div`
  display: flex;
  padding: 40px;
  width: 100%;
  min-width: 400px;
  justify-content: space-around;
  align-items: center;
  
`;
const ProductName = styled.p`
  color: ${COLOR.text_2};
  font-size: ${FONT.sm};
`;
const Photo = styled.div`
  width: 90px;
  height: 90px;
`;
const PhotoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Price = styled.p`
  font-weight: bold;
  color: ${COLOR.text_1};
  font-size: ${FONT.sm};
`;
export default function ItemDetail({Items}) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { carts, errorMessage, isLoading } = cartOrder();
   const handleDelete = (id) => {
     dispatch(deleteCartItem(id));
   };
  return (
    <CartInfo>
      <Photo>
        <PhotoImg src={Items.pictureUrl}></PhotoImg>
      </Photo>
      <ProductName>{Items.productName}</ProductName>
      <ChooseQuantity Items={Items} />
      <Price>NT${Items.price}</Price>
      <IconComponent kind={"delete"} onClick={() => handleDelete(id)} />
    </CartInfo>
  );
}
