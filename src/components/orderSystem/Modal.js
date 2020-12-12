import styled from 'styled-components';
import React, { useState } from "react";
import { InputComponent } from "../../components/Input";
import { ActionButton } from "../../components/Button";
import { COLOR, FONT } from '../../constants/style';

import { useDispatch } from "react-redux";
import {
  setContent,
  setErrorMessage,
} from "../../redux/slices/orderSlice/orderSlice";
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
  font-size: ${FONT.md};
  color: red;
`;
const Title = styled.div`
  color: ${COLOR.text_2};
  font-size: ${FONT.md};
`;
export default function Modal() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const setError = () => dispatch(setErrorMessage(null));
  const { errorMessage } = useOrder();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
      dispatch(setContent(value));
      window.location.reload(true);
    };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Title>訂單取消原因</Title>
        <InputComponent
          $size={"lg"}
          placeholder="取消原因... "
          onChange={(e) => setValue(e.target.value)}
          onFocus={setError}
          value={value}
          style={{
            margin: "40px auto",
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
