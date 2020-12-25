import styled from "styled-components";
import React, { useState } from "react";
import { InputComponent } from "../../components/Input";
import { IconComponent } from "../../components";
import { ActionButton } from "../../components/Button";
import { COLOR, FONT } from "../../constants/style";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setErrorMessage } from "../../redux/slices/orderSlice/orderSlice";
import useOrder from "../../hooks/orderHooks/useOrder";
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 80px auto;
  height: 300px;
  width: 40%;
  min-width: 300px;
  border-radius: 9px;
  background: ${COLOR.white};
  position: relative;
`;
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${COLOR.bg_mask};
  z-index: 2;
`;
const ErrorMessage = styled.div`
  font-size: ${FONT.sm};
  color: #a07676;
  margin-top: 10px;
  letter-spacing: 1px;
`;
const Title = styled.div`
  color: ${COLOR.text_2};
  font-size: ${FONT.md};
`;
const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 10px;
  margin-right: 10px;
`;

export default function Modal() {
  const [cancelReason, setCancelReason] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const setError = () => dispatch(setErrorMessage(null));
  const {
    errorMessage,
    handleCloseModal,
    handleSubmitCancelReason,
  } = useOrder();

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmitCancelReason(e, id, cancelReason)}>
        <Wrapper onClick={handleCloseModal}>
          <IconComponent kind="close-black" />
        </Wrapper>
        <Title>訂單取消原因</Title>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <InputComponent
          $size={"lg"}
          placeholder="取消原因... "
          onChange={(e) => setCancelReason(e.target.value)}
          onFocus={setError}
          value={cancelReason}
          style={{
            margin: "30px auto",
            width: "70%",
            height: "20%",
          }}
        />
        <ActionButton
          style={{
            "margin-top": "20px",
          }}
        >
          確認取消
        </ActionButton>
      </Form>
    </Container>
  );
}
