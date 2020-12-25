import styled from "styled-components";
import React from "react";
import { IconComponent } from "../../components";
import { COLOR, FONT } from "../../constants/style";
import ChooseQuantity from "./ChooseQuantity";
import useCart from "../../hooks/cartHooks/useCart";
import { LoopCircleLoading } from "react-loadingg";
import { useDispatch } from "react-redux";

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
const Container = styled.div``;
const LoadingBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${COLOR.bg_mask};
  z-index: 2;
`;
export default function ItemDetail({ Item }) {
  const dispatch = useDispatch();
  const {
    isLoading,
    handleDeleteProductInCart,
    formatter,
    isPaying,
    completeOrder,
    checked,
  } = useCart();

  return (
    <>
      {isLoading && (
        <LoadingBackground>
          <LoopCircleLoading />;
        </LoadingBackground>
      )}
      <CartInfo>
        <Photo>
          <PhotoImg src={Item.pictureUrl}></PhotoImg>
        </Photo>
        <ProductName>{Item.productName}</ProductName>
        <ChooseQuantity Item={Item} />
        {completeOrder ? (
          <Price>{formatter.format(Item.price * Item.cartQuantity)}</Price>
        ) : (
          <Price>{formatter.format(Item.price)}</Price>
        )}
        {checked || isPaying ? null : (
          <Container onClick={() => handleDeleteProductInCart(Item.cartItemId)}>
            <IconComponent kind="delete" />
          </Container>
        )}
      </CartInfo>
    </>
  );
}
