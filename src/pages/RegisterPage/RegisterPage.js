import React, { useEffect } from 'react';
import styled from 'styled-components';
import { COLOR, FONT } from '../../constants/style';
import { NavLink } from 'react-router-dom';
import { ThickNavTwoColumnsPage } from '../../components/Page';
import {
  Column,
  BackgroundColumn,
  Form,
  JoinButton,
  JoinInput,
} from '../../components/general/';
import useRegister from '../../hooks/userHooks/useRegister';
import { useDispatch } from 'react-redux';

const Title = styled.h1`
  color: ${COLOR.text_2};
  font-size: ${FONT.lg};
  font-weight: 400;
  margin-bottom: 30px;
`;

const Description = styled.div`
  color: ${COLOR.text_2};
`;

const RuleLink = styled(NavLink)`
  display: inline-block;
  color: #488eb2;
  &:hover {
    color: ${COLOR.hover};
  }
`;

const ErrorMessage = styled.div`
  margin-top: 5px;
  color: ${COLOR.text_alert};
  font-size: ${FONT.sm};
`;

const Loading = styled.div``;

const RegisterPage = () => {
  const dispatch = useDispatch();
  const {
    handleInputChange,
    handleRegister,
    setUsername,
    setPassword,
    setEmail,
    setErrorMessage,
    togglePassword,
    isPasswordShowed,
    isUsernameValid,
    isPasswordValid,
    isEmailValid,
    errorMessage,
    isUserLoading,
  } = useRegister();

  useEffect(() => {
    dispatch(setErrorMessage(null));
  }, [dispatch, setErrorMessage]);

  return (
    <>
      <ThickNavTwoColumnsPage>
        <Column>
          <Form>
            <Title>立即註冊 Give++ 帳號</Title>

            <JoinInput
              title="帳號"
              type="username"
              limit="20"
              message="需為 6 碼以上英數字"
              handleInputChange={handleInputChange(setUsername)}
              errorMessage={isUsernameValid === false && '請輸入有效的帳號'}
            />

            <JoinInput
              title="密碼"
              type="password"
              limit="20"
              togglePassword={togglePassword}
              isPasswordShowed={isPasswordShowed}
              message="需為 6 碼以上的英數字"
              handleInputChange={handleInputChange(setPassword)}
              errorMessage={isPasswordValid === false && '請輸入有效的密碼'}
            />

            <JoinInput
              title="信箱"
              type="email"
              limit="30"
              handleInputChange={handleInputChange(setEmail)}
              errorMessage={isEmailValid === false && '請輸入有效的信箱'}
            />

            <Description>
              按下註冊鈕的同時，表示您已詳閱我們的
              <RuleLink to={'/rules'} children={'資料使用政策與使用條款'} />
            </Description>

            {isUserLoading ? (
              <Loading>Loading...</Loading>
            ) : (
              <>
                <ErrorMessage>{errorMessage}</ErrorMessage>
                <JoinButton onClick={handleRegister}>註冊</JoinButton>
              </>
            )}
          </Form>
        </Column>
        <BackgroundColumn />
      </ThickNavTwoColumnsPage>
    </>
  );
};

export default RegisterPage;
