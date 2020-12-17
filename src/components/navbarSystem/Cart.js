import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IconComponent from '../Icon';
import { Nav } from '../Button';
import { COLOR, DISTANCE, EFFECT, FONT } from '../../constants/style';

const UserContainer = styled.div`
  position: relative;
  &:hover {
    & div {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const OptionWrapper = styled.div`
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.2s linear;
  position: absolute;
  top: 30px;
  right: 0;
  &::before {
    content: '';
    width: 0;
    height: 0;
    border-color: transparent transparent #e5e5e6;
    border-style: solid;
    border-width: 0 7px 10px;
    position: absolute;
    top: 0;
    right: 13px;
    z-index: 7000;
  }
  &::after {
    content: '';
    width: 0;
    height: 0;
    border-color: transparent transparent #fff;
    border-style: solid;
    border-width: 0 6px 9px;
    position: absolute;
    top: 1px;
    right: 14px;
    z-index: 7500;
  }
`;

const OptionInner = styled.div`
  padding-top: 9px;
  z-index: 1;
  position: relative;
  width: 250px;
  background: ${COLOR.bg_primary};
`;

const OptionList = styled.ul`
  border: 1px solid #e5e5e6;
  border-radius: 5px;
  padding: 10px 0 20px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const OptionItem = styled.li`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & p {
    font-size: ${FONT.sm};
    color: ${COLOR.text_1};
  }
`;

const CartDetail = styled.li`
  width: 100%;
  padding: 10px 15px;
  background: #6dd0cd17;
`;

const VendorName = styled.p`
  box-shadow: ${EFFECT.shadowDark};
`;

const ProductsDetail = styled.ul``;

const ProductItem = styled.li`
  display: flex;
  margin: ${DISTANCE.xs} 0;
`;

const ProductImg = styled.img`
  width: 50px;
  height: 50px;
  image-rendering: pixelated;
`;

const ProductInfo = styled.div`
  margin: 0 ${DISTANCE.sm};
`;

const ProductName = styled.p``;

const ProductPrice = styled.p``;

const TotalPrice = styled.p`
  text-align: right;
  color: ${COLOR.text_alert};
  & span {
    color: ${COLOR.black};
  }
`;

const CartBottom = styled.div`
  margin-top: 15px;
`;

const CartItem = ({ cartItem }) => {
  const formatter = new Intl.NumberFormat('zh-TW', {
    style: 'currency',
    currency: 'NTD',
    minimumFractionDigits: 0,
  });

  return (
    <CartDetail>
      <VendorName>{cartItem.sellerName}</VendorName>
      <ProductsDetail>
        {cartItem.cartDetail.map((product, index) => (
          <ProductItem key={index}>
            <ProductImg src={product.pictureUrl} />
            <ProductInfo>
              <ProductName>{product.productName}</ProductName>
              <ProductPrice>{formatter.format(product.price)}</ProductPrice>
            </ProductInfo>
          </ProductItem>
        ))}

        <TotalPrice>
          <span>合計：</span>
          {formatter.format(
            cartItem.cartDetail.reduce((acc, cur) => acc + cur.price, 0)
          )}
        </TotalPrice>
      </ProductsDetail>
    </CartDetail>
  );
};

export default function Cart() {
  const cart = [
    {
      sellerName: 'Seller02',
      cartDetail: [
        {
          cartItemId: 7,
          sellerId: 36,
          sellerName: 'Seller02',
          productId: 33,
          productName: '大樹',
          pictureUrl: 'https://i.imgur.com/uRwmXwn.jpg',
          price: 5000,
          cartQuantity: 1,
          productQuantity: 1,
        },
        {
          cartItemId: 8,
          sellerId: 36,
          sellerName: 'Seller02',
          productId: 34,
          productName: '狗狗',
          pictureUrl: 'https://i.imgur.com/fihu4ZV.jpg',
          price: 5000,
          cartQuantity: 1,
          productQuantity: 1,
        },
        {
          cartItemId: 9,
          sellerId: 36,
          sellerName: 'Seller02',
          productId: 35,
          productName: '麋路',
          pictureUrl: 'https://i.imgur.com/hAGj1RE.jpg',
          price: 5000,
          cartQuantity: 1,
          productQuantity: 1,
        },
        {
          cartItemId: 10,
          sellerId: 36,
          sellerName: 'Seller02',
          productId: 36,
          productName: '兔子',
          pictureUrl: 'https://i.imgur.com/EYV9VAS.gif',
          price: 5000,
          cartQuantity: 1,
          productQuantity: 1,
        },
      ],
    },
    {
      sellerName: 'Seller03',
      cartDetail: [
        {
          cartItemId: 7,
          sellerId: 36,
          sellerName: 'Seller02',
          productId: 33,
          productName: '帆船',
          pictureUrl: 'https://i.imgur.com/uRwmXwn.jpg',
          price: 5000,
          cartQuantity: 1,
          productQuantity: 1,
        },
        {
          cartItemId: 8,
          sellerId: 36,
          sellerName: 'Seller02',
          productId: 34,
          productName: '長頸鹿',
          pictureUrl: 'https://i.imgur.com/fihu4ZV.jpg',
          price: 5000,
          cartQuantity: 1,
          productQuantity: 1,
        },
      ],
    },
  ];

  return (
    <UserContainer>
      <IconComponent kind={'shopping-cart'} />
      <OptionWrapper>
        <OptionInner>
          {cart ? (
            <OptionList>
              <OptionItem>
                <p>購物車</p>
              </OptionItem>
              {cart.map((cartItem, index) => (
                <CartItem cartItem={cartItem} key={index} />
              ))}
              <CartBottom>
                <Nav children={'前往結帳'} path={'/cart'} />
              </CartBottom>
            </OptionList>
          ) : (
            <OptionList>
              <OptionItem style={{ color: COLOR.text_1, margin: '15px 0' }}>
                你的購物車中沒有商品
              </OptionItem>
            </OptionList>
          )}
        </OptionInner>
      </OptionWrapper>
    </UserContainer>
  );
}
