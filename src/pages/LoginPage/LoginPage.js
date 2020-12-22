import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { COLOR, FONT } from '../../constants/style';
import { ThickNavTwoColumnsPage } from '../../components/Page';
import useLogin from '../../hooks/userHooks/useLogin';
import {
  Title,
  Column,
  BackgroundColumn,
  Form,
  JoinButton,
  JoinInput,
  AlertFooter
} from '../../components/general/';

const Description = styled.div`
  color: ${COLOR.text_2};
`;

const RegisterLink = styled(NavLink)`
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

const LoginPage = () => {
  const dispatch = useDispatch();
  const {
    handleInputChange,
    setUsername,
    setPassword,
    togglePassword,
    isPasswordShowed,
    errorMessage,
    isUserLoading,
    handleLogin,
    setErrorMessage,
  } = useLogin();

  useEffect(() => dispatch(setErrorMessage(null)), [dispatch, setErrorMessage]);

  return (
    <>
      <ThickNavTwoColumnsPage>
        <Column>
          <Form>
            <Title $isLarge>以 Give++ 帳號登入</Title>
            <JoinInput
              title="帳號"
              type="username"
              limit="20"
              handleInputChange={handleInputChange(setUsername)}
            />
            <JoinInput
              title="密碼"
              type="password"
              limit="20"
              linksType="password"
              togglePassword={togglePassword}
              isPasswordShowed={isPasswordShowed}
              handleInputChange={handleInputChange(setPassword)}
            />

            <Description>
              還不是會員嗎？{' '}
              <RegisterLink to={'/register'} children={'立刻註冊新帳號'} />
            </Description>

            {isUserLoading ? (
              <Loading>Loading...</Loading>
            ) : (
              <>
                <ErrorMessage>{errorMessage}</ErrorMessage>
                <JoinButton onClick={handleLogin}>登入</JoinButton>
              </>
            )}
          </Form>
        </Column>
        <BackgroundColumn $picture={'login-bg'} />
      </ThickNavTwoColumnsPage>
      <AlertFooter />
    </>
  );
};

export default LoginPage;
