import React, { useEffect } from 'react';
import styled from 'styled-components';
import IconComponent from '../Icon';
import { Nav } from '../Button';
import { COLOR, DISTANCE, EFFECT, FONT } from '../../constants/style';
import { selectCart } from '../../redux/slices/cartSlice/cartSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCartItem } from '../../redux/slices/cartSlice/cartSlice';

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
    top: 3px;
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
  object-fit: cover;
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

const ProductQuantity = styled.span``;

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
              <ProductQuantity>x{product.cartQuantity}</ProductQuantity>
            </ProductInfo>
          </ProductItem>
        ))}

        <TotalPrice>
          <span>合計：</span>
          {formatter.format(
            cartItem.cartDetail.reduce(
              (acc, cur) => acc + cur.price * cur.cartQuantity,
              0
            )
          )}
        </TotalPrice>
      </ProductsDetail>
    </CartDetail>
  );
};

export default function Cart() {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItem());
  }, [dispatch]);
  const handleGetCart = () => {
    window.location.reload(true);
    dispatch(getCartItem());
  };
  return (
    <UserContainer>
      <IconComponent kind={'shopping-cart'} />
      <OptionWrapper>
        <OptionInner>
          {cart && cart.length > 0 ? (
            <OptionList>
              <OptionItem>
                <p>購物車</p>
              </OptionItem>
              {cart.map((cartItem, index) => (
                <CartItem cartItem={cartItem} key={index} />
              ))}
              <CartBottom>
                <Nav
                  children={'前往結帳'}
                  path={'/cart'}
                  onClick={() => handleGetCart()}
                />
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
