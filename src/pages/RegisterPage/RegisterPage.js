import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../../components';
import { ThickNavTwoColumnsPage } from '../../components/Page';

const Column = styled.div`
  height: 100%;
  width: 50vw;
`;

const BackgroundColumn = styled(Column)`
  background: url(${process.env.PUBLIC_URL}/register-bg.jpg) center/cover;
`;

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <ThickNavTwoColumnsPage>
        <Column>
          
        </Column>
        <BackgroundColumn />
      </ThickNavTwoColumnsPage>
    </>
  );
};

export default RegisterPage;
