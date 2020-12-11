import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useAdmin from '../../../hooks/adminHooks/useAdmin';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from '../../../components';
import { COLOR, FONT, EFFECT, DISTANCE } from '../../../constants/style';
import { ActionButton } from '../../../components/Button';
import {
  OptionListComponent,
  ExamineProductComponent,
} from '../../../components/adminSystem';
import { ThickNavPage } from '../../../components/Page';

const Wrapper = styled.div`
  width: 50vw;
  margin: 0 auto;
  padding: 30px 0;
`;

const Title = styled.h1`
  color: ${COLOR.black};
  font-size: ${FONT.lg};
  margin-top: ${DISTANCE.lg};
`;

const Text = styled.p`
  color: ${COLOR.black};
  font-size: ${FONT.md};
  margin: ${DISTANCE.lg} 0 ${DISTANCE.sm} 0;
`;

const ErrorText = styled.p`
  color: ${COLOR.text_alert};
  font-size: ${FONT.xss};
  margin-top: 15px;
`;

const SuccessMessage = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 200px;
  min-width: 40vw;
  color: ${COLOR.text_1};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: ${FONT.lg};
  border-radius: 15px;
  background: ${COLOR.light_primary};
  box-shadow: ${EFFECT.shadowDark};
  & p {
    margin: 20px;
  }
`;

const AdminBackstagePage = () => {
  return (
    <>
      <Navbar />
      <ThickNavPage>
        <Wrapper>
          <Title>後台管理系統</Title>
          <OptionListComponent />
          <Title>商品審查</Title>
          <ExamineProductComponent />
        </Wrapper>
      </ThickNavPage>
    </>
  );
};

export default AdminBackstagePage;
