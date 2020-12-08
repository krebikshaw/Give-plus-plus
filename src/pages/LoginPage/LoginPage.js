import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Navbar, IconComponent } from '../../components';
import { COLOR, FONT } from '../../constants/style';
import { ThickNavTwoColumnsPage } from '../../components/Page';

const Column = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 50vw;
`;

const BackgroundColumn = styled(Column)`
  background: url(${process.env.PUBLIC_URL}/login-bg.jpg) center/cover;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 80px;
  height: 450px;
  width: 100%;
  min-width: 300px;
`;

const Title = styled.h1`
  color: ${COLOR.text_2};
  font-size: ${FONT.lg};
  font-weight: 400;
  margin-bottom: 30px;
`;

const InputBox = styled.div`
  margin-bottom: 40px;
  width: 70%;
`;

const InputTitle = styled.h2`
  margin: 0 0 10px 15px;
  font-size: ${FONT.xs};
  font-weight: 400;
  color: ${COLOR.text_2};
`;

const InputWrapper = styled.div`
  display: flex;
  padding: 7px 0;
  width: 100%;
  border-radius: 25px;
  border: 1px solid ${COLOR.text_2};
  font-size: ${FONT.sm};
`;

const Input = styled.input`
  width: 75%;
  font-size: ${FONT.sm};
  color: ${COLOR.text_2};
  letter-spacing: 2px;
`;

const Remind = styled.div`
  margin-top: 10px;
  text-align: center;
  color: ${COLOR.text_2};
`;

const RemindLink = styled(NavLink)`
  display: inline-block;
  color: ${COLOR.text_2};
  &:hover {
    color: ${COLOR.hover};
  }
`;

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

const LoginButton = styled.button`
  margin: 10px 0 40px;
  border-radius: 25px;
  padding: 15px 0;
  border: 1px solid ${COLOR.text_2};
  width: 70%;
  text-align: center;
  color: ${COLOR.text_2};
  &:hover {
    border-color: ${COLOR.hover};
    color: ${COLOR.hover};
    transform: scale(1.05);
  }
`;

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <ThickNavTwoColumnsPage>
        <Column>
          <Form>
            <Title>以 Give++ 帳號登入</Title>

            <InputBox>
              <InputTitle>帳號</InputTitle>
              <InputWrapper>
                <IconComponent kind={'user'} />
                <Input maxLength={20}></Input>
              </InputWrapper>
            </InputBox>

            <InputBox>
              <InputTitle>密碼</InputTitle>
              <InputWrapper>
                <IconComponent kind={'lock'} />
                <Input maxLength={16}></Input>
                <IconComponent kind={'invisible'} />
              </InputWrapper>
              <Remind>
                <RemindLink to={'#'}>忘記密碼</RemindLink> ｜{' '}
                <RemindLink to={'#'}>重寄認證信</RemindLink>
              </Remind>
            </InputBox>

            <Description>
              還不是會員嗎？{' '}
              <RegisterLink to={'/register'} children={'立刻註冊新帳號'} />
            </Description>

            <LoginButton>登入</LoginButton>
          </Form>
        </Column>
        <BackgroundColumn />
      </ThickNavTwoColumnsPage>
    </>
  );
};

export default LoginPage;
