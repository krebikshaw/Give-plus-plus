import styled from "styled-components";
import React from "react";
import { ActionButton } from "../../components/Button";
import { COLOR, FONT } from "../../constants/style";
import { IconComponent } from "../../components";
import useCart from "../../hooks/cartHooks/useCart";

const Container = styled.div`
  width: 300px;
  border: solid 1px #e6e6e6;
  border-radius: 8px 8px;
  margin-bottom: 40px;
  position: fixed;
  top: 28%;
  right: 10%;
  transform: translate(20%, -10%);
`;
const Top = styled.div`
  padding: 10px 20px;
  background: #e6e6e6;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  height: 60px;
`;
const Title = styled.p`
  color: ${COLOR.white};
  font-size: ${FONT.sm};
`;
const Count = styled.div`
  padding: 10px 20px;
  border-radius: 0 0 8px 8px;
`;
const Wrapper = styled.div`
  display: flex;
  margin: 20px 0;
`;
const TotalAmount = styled.p`
  color: ${COLOR.text_1};
  font-size: ${FONT.sm};
  font-weight: bold;
`;
const TotalAmountTitle = styled.p`
  color: ${COLOR.text_2};
  font-size: ${FONT.sm};
  margin-right: 20px;
`;
const Hr = styled.hr`
  border: solid 0.2px #f6f5f5;
  margin-bottom: 20px;
`;
const ErrorModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${COLOR.bg_mask};
  z-index: 2;
`;
const ErrorForm = styled.form`
  display: flex;
  position: relative;
  align-items: center;
  padding: 0 60px;
  letter-spacing: 1px;
  justify-content: center;
  flex-direction: column;
  margin: 80px auto;
  height: 300px;
  width: 40%;
  min-width: 300px;
  border-radius: 9px;
  background: ${COLOR.white};
`;
const ModalIconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 10px;
  margin-right: 10px;
`;
export default function OrderPrice({ cart }) {
  const {
    formatter,
    price,
    errorMessage,
    handleCloseError,
    handlePay,
  } = useCart();
  const productId = cart.cartDetail.map((data) => Object.values(data)[3]);

  return (
    <>
      {errorMessage && (
        <ErrorModal>
          <ErrorForm>
            <ModalIconContainer onClick={() => handleCloseError()}>
              <IconComponent kind="close-black" />
            </ModalIconContainer>
            {errorMessage}
          </ErrorForm>
        </ErrorModal>
      )}
      <Container>
        <Top>
          <Title>訂單摘要</Title>
        </Top>
        <Count>
          <Wrapper>
            <TotalAmountTitle>商品總計</TotalAmountTitle>

            <TotalAmount>{formatter.format(price)}</TotalAmount>
          </Wrapper>
          <Wrapper>
            <TotalAmountTitle>運費總計</TotalAmountTitle>
            <TotalAmount>NTD 0</TotalAmount>
          </Wrapper>
          <Hr />
          <Wrapper>
            <TotalAmountTitle>總共金額</TotalAmountTitle>
            <TotalAmount> {formatter.format(price)}</TotalAmount>
          </Wrapper>
          <ActionButton
            $margin={0}
            style={{ background: "#b6deea" }}
            onClick={() => handlePay(productId[0])}
          >
            前往結帳
          </ActionButton>
        </Count>
      </Container>
    </>
  );
}
