import styled from "styled-components";
import React, { useEffect } from "react";
import { IconComponent } from "../../components";
import { ActionButton } from "../../components/Button";
import { COLOR, FONT, DISTANCE, MEDIA_QUERY_MD } from "../../constants/style";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import ItemDetail from "./ItemDetail";
import useCart from "../../hooks/cartHooks/useCart";
import useOrder from "../../hooks/orderHooks/useOrder";
import useProduct from "../../hooks/productHooks/useProduct";
import { getUser } from "../../redux/slices/orderSlice/orderSlice";
import { getProduct } from "../../redux/slices/productSlice/productSlice";
import {
  getCartItem,
  updateCartItem,
  deleteCartItem,
  deleteCartItemsBySeller,
  setIsPaying,
  setFilter,
  setPayWay,
  setComplete,
} from "../../redux/slices/cartSlice/cartSlice";
const Container = styled.div`
  width: 300px;
  border: solid 1px #e6e6e6;
  border-radius: 8px 8px;
  margin-bottom: 40px;
  position: absolute;
  top: 25%;
  right: 10%;
  transform: translate(20%, -5%);
`;
const PayContainer = styled.div`
  width: 300px;
  border: solid 1px #f7f7f8;
  background: #f7f7f8;
  border-radius: 8px 8px;
  margin-bottom: 40px;
  position: absolute;
  top: 55%;
  right: 10%;
  transform: translate(20%, -5%);
  padding: 10px 20px;
`;
const IconContainer = styled.div`
  
`;
const ReceiveInfo = styled.div`
  padding: 10px 20px;
  background: #e6e6e6;
  border-radius: 8px 8px 0 0;
  
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.p`
  color: ${COLOR.text_2};
  font-size: ${FONT.sm};
  letter-spacing: 1px;
`;
const Name = styled.p`
  color: ${COLOR.text_2};
  font-size: ${FONT.sm};
  margin-bottom: 8px;
  letter-spacing: 1px;
`;
const Address = styled.p`
  color: ${COLOR.text_2};
  font-size: ${FONT.sm};
  margin-bottom: 8px;
  letter-spacing: 1px;
`;

const ReceiveWay = styled.div`
  padding: 10px 20px;
  border-radius: 0 0 8px 8px;
  background: #f7f7f8;
`;
const Wrapper = styled.div`
  display: flex;
  margin: 0;
  align-items: baseline;
`;
const PayWrapper = styled.div`
  display: flex;
  margin: 0;
  align-items: baseline;
  margin-bottom: 15px;
`;
const WrapperAll = styled.div`

`;
const ReceiveDetail = styled.p`
  color: ${COLOR.text_1};
  font-size: ${FONT.sm};
  font-weight: bold;
`;
const ReceiveTitle = styled.p`
  color: ${COLOR.text_2};
  font-size: ${FONT.sm};
  margin-right: 20px;
`;
const Hr = styled.hr`
  border: solid 0.2px #D8D8D9;
  margin-bottom: 20px;
  margin-top: 10px;
`;
const Radio = styled.input`
  margin: 0 12px 0 4px;
`;


export default function PayDetail({cart}) {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    carts,
    errorMessage,
    isLoading,
    handleDeleteSeller,
    formatter,
    isPaying,
    payWay,
    completeOrder,
  } = useCart();
  const {
    user
  } = useOrder();
  const {
    product,
  } = useProduct();
  const handlePay = () => {
    dispatch(setIsPaying(true));
    dispatch(setFilter("select"));
  };
  const productId = cart.cartDetail.map((data) => Object.values(data)[3]);
  useEffect(() => {
    dispatch(getUser());
    dispatch(getProduct(productId[0]))
  }, [dispatch, productId[0]]);
  const handleToCheckOutCartPage = () => {
    if (payWay === true){
        navigate("/cart/checkout");
    }
    dispatch(setComplete(true));
  }
  const handlePayWay = () => {
    dispatch(setPayWay(true));
  }
  return (
    <WrapperAll>
      <Container>
        <ReceiveInfo>
          <Top>
            <Title>收件資訊</Title>
            {completeOrder ? null : (
              <IconContainer>
                <IconComponent kind={"update"} />
              </IconContainer>
            )}
          </Top>
          <Name>{user && user.username}</Name>
          <Address>{user && user.address}</Address>
          <Name>購買人：{user && user.username}</Name>
        </ReceiveInfo>
        <ReceiveWay>
          <Wrapper>
            <ReceiveTitle>
              運送方式 : {product.delivery === 0 ? "面交" : "郵寄"}
            </ReceiveTitle>
            <ReceiveDetail></ReceiveDetail>
          </Wrapper>
        </ReceiveWay>
      </Container>
      {completeOrder ? null : (
        <PayContainer>
          <Title>付款方式</Title>
          <Hr />
          <PayWrapper>
            <Radio type="radio" name="radio" onClick={handlePayWay}></Radio>
            <Title>面交時付款</Title>
          </PayWrapper>
          <PayWrapper>
            <Radio type="radio" name="radio" onClick={handlePayWay}></Radio>
            <Title>超商取貨付款</Title>
          </PayWrapper>
          <PayWrapper>
            <Radio type="radio" name="radio" onClick={handlePayWay}></Radio>
            <Title>Apple Pay</Title>
          </PayWrapper>
          <ActionButton
            $margin={0}
            style={{ background: "#b6deea", width: "100%" }}
            onClick={handleToCheckOutCartPage}
          >
            確認付款
          </ActionButton>
        </PayContainer>
      )}
    </WrapperAll>
  );
}
