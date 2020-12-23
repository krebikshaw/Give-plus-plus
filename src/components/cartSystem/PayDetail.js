import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { IconComponent } from "../../components";
import { InputComponent } from "../../components/Input";
import { ActionButton } from "../../components/Button";
import { COLOR, FONT} from "../../constants/style";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useCart from "../../hooks/cartHooks/useCart";
import useOrder from "../../hooks/orderHooks/useOrder";
import useProduct from "../../hooks/productHooks/useProduct";
import { getUser } from "../../redux/slices/orderSlice/orderSlice";
import { getProduct } from "../../redux/slices/productSlice/productSlice";
import {
  setPayWay,
  setComplete,
  createOrder,
  setUpdate,
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
const UpdateTitle = styled.p`
  color: ${COLOR.text_2};
  font-size: ${FONT.sm};
  letter-spacing: 1px;
  margin: 20px 0;
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
const IconClose = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 10px;
  margin-right: 10px;
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
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${COLOR.bg_mask};
  z-index: 2;
`;
const Form = styled.form`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 80px auto;
  width: 40%;
  min-width: 300px;
  border-radius: 9px;
  background: ${COLOR.white};
`;
export default function PayDetail({cart}) {
  const [receiver, setReceiver] = useState('')
  const [receiveAddress, setReceiveAddress] = useState("");
  const [buyer, setBuyer] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    payWay,
    completeOrder,
    update,
  } = useCart();
  const {
    user
  } = useOrder();
  const {
    product,
  } = useProduct();
  const readyToOrderItems = cart.cartDetail.map((cartDetail) => {
    return {
      ProductId: cartDetail.productId,
      UserId: cartDetail.sellerId,
      product_quantity: cartDetail.cartQuantity,
    };
  });

  const handleToCheckOutCartPage = (readyToOrderItems) => {
    if (payWay === true) {
      navigate("/cart/checkout");
    }
    dispatch(setComplete(true));
    dispatch(createOrder(readyToOrderItems));
  }

  const handlePayWay = () => {
    dispatch(setPayWay(true));
  }
  const handleUpdateReceiveInfo = () => {
    dispatch(setUpdate(true));
  }
  const handleClose = () => {
    dispatch(setUpdate(false));
  }
  const handleUpdateReceiver = (e) => {
    setReceiver(e.target.value);
  };
  const handleUpdateAddress = (e) => {
    setReceiveAddress(e.target.value);
  };
  const handleUpdateBuyer = (e) => {
    setBuyer(e.target.value);
  };
  const handleUpdateInfo = () => {
    dispatch(setUpdate(false));
  }

  return (
    <>
      {update && (
        <Modal>
          <Form>
            <IconClose onClick={handleClose}>
              <IconComponent kind={"close-black"} />
            </IconClose>
            <UpdateTitle>請填寫收件人與購買人資訊</UpdateTitle>
            <Title>收件人</Title>
            <InputComponent
              value={receiver}
              placeholder="收件人姓名"
              onChange={handleUpdateReceiver}
            ></InputComponent>
            <InputComponent
              value={receiveAddress}
              placeholder="收件地址"
              onChange={handleUpdateAddress}
            ></InputComponent>
            <Title>購買人</Title>
            <InputComponent
              value={buyer}
              placeholder="購買人姓名"
              onChange={handleUpdateBuyer}
            ></InputComponent>
            <ActionButton
              $margin={0}
              style={{ background: "#b6deea", "margin-bottom": "20px" }}
              onClick={handleUpdateInfo}
            >
              確認更新
            </ActionButton>
          </Form>
        </Modal>
      )}
      <WrapperAll>
        <Container>
          <ReceiveInfo>
            <Top>
              <Title>收件資訊</Title>
              {completeOrder ? null : (
                <IconContainer onClick={handleUpdateReceiveInfo}>
                  <IconComponent kind={"update"} />
                </IconContainer>
              )}
            </Top>
            <Name>{receiver ? receiver : user && user.username}</Name>
            <Address>
              {receiveAddress ? receiveAddress : user && user.address}
            </Address>
            <Name>購買人：{buyer ? buyer : user && user.username}</Name>
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
              onClick={() => handleToCheckOutCartPage(readyToOrderItems)}
            >
              確認付款
            </ActionButton>
          </PayContainer>
        )}
      </WrapperAll>
    </>
  );
}
