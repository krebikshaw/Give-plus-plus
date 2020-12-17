import styled from "styled-components";
import React, { useEffect } from "react";
import { Navbar, IconComponent } from "../../components";
import { COLOR, FONT, DISTANCE, MEDIA_QUERY_MD } from "../../constants/style";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import ItemDetail from "./ItemDetail";
import useCart from "../../hooks/cartHooks/useCart";
import {
  getCartItem,
  updateCartItem,
  deleteCartItem,
  deleteCartItemsBySeller,
  setIsSelect,
} from "../../redux/slices/cartSlice/cartSlice";
const Container = styled.p`
  margin: 20px auto;
  min-width: 500px;
  width: 95%;
  min-width: ${MEDIA_QUERY_MD.md};
  height: 420px;
  overflow: auto;
  border:solid 1px #f6f5f5;
  border-radius: 8px 8px;
  margin-bottom: 40px;
`;

const Top = styled.div`
  background: #b6deea;
  border: 2px solid #b6deea;
  padding: 15px;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
`;
const Seller = styled.div`
  display: flex;
`;
const Check = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin: 8px 11px;
`;
const Name = styled.p`
  margin: 8px 11px;
  color: ${COLOR.white};
  font-size: ${FONT.sm};
`;
const SendDetail = styled.div`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const Hr = styled.hr`
  border: solid 0.2px #f6f5f5;
  margin-bottom: 20px;
`;
const Title = styled.p`
  color: ${COLOR.text_2};
  font-size: ${FONT.sm};
`;
const Select = styled.select`
  color: ${COLOR.text_2};
  font-size: ${FONT.sm};
  border-color: ${COLOR.text_2};
  outline: none;
  border-radius: 7px;
  padding: 6px 20px;
  width: 15%;
  margin: 10px 0 10px 0;
`;
const IconContainer = styled.div`
`;

export default function CartItem({ cart }) {
  
  const dispatch = useDispatch();
  const {
    carts,
    errorMessage,
    isLoading,
    handleDeleteSeller,
    isSelect,
    isPaying,
  } = useCart();
  const SellerId = cart.cartDetail.map((data) => Object.values(data)[1]);
  const handleSelect = (id) => {
    dispatch(setIsSelect(id));
  }
  return (
    <Container>
      <Top>
        <Seller>
          <Check
            type="checkbox"
            onClick={() => handleSelect(SellerId[0])}
          ></Check>
          <Name isSelect={isSelect}>{cart.sellerName}</Name>
        </Seller>
        <IconContainer onClick={() => handleDeleteSeller(SellerId)}>
          <IconComponent kind={"close"} />
        </IconContainer>
      </Top>
      {cart.cartDetail.map((Item) => (
        <ItemDetail Item={Item} key={Item.productId} />
      ))}
      <SendDetail>
        <Hr />
        <Title>選擇收件地與運送方式</Title>
        <Select name="地區">
          <option value="台灣">台灣</option>
        </Select>
        <Select name="交貨方式">
          <option value="面交">面交</option>
        </Select>
      </SendDetail>
    </Container>
  );
}







