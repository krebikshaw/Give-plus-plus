import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLOR, FONT } from '../../constants/style';
import { Navbar } from '../../components';
import { ThickNavTwoColumnsPage } from '../../components/Page';
import SocialMediaButton from '../../components/SocialMediaButton';

const Column = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 50vw;
`;

const BackgroundColumn = styled(Column)`
  background: url(${process.env.PUBLIC_URL}/entrance-bg.jpg) center/cover;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 80px;
  height: 300px;
  width: 100%;
  min-width: 300px;
`;

const Section = styled.div`
  display: flex;
`;

const NavButton = styled(NavLink)`
  padding: 10px 40px;
  margin: 0px 20px;
  display: inline-block;
  transition: background-color 0.1s ease-in-out, border-color 0.1s ease-in-out,
    color 0.1s ease-in-out;
  border-radius: 10px;
  border: solid 1px ${COLOR.black};
  background-color: ${COLOR.bg_primary};
  text-align: center;
  text-decoration: none;
  color: ${COLOR.black};
  cursor: pointer;
  &:hover {
    border-color: ${COLOR.hover};
    color: ${COLOR.hover};
    transform: scale(1.05);
  }
`;

const Description = styled.p`
  margin: 60px 0 40px;
  font-size: ${FONT.md};
  color: ${COLOR.text_2};
`;

const EntrancePage = () => {
  return (
    <>
      <Navbar />
      <ThickNavTwoColumnsPage>
        <Column>
          <Container>
            <Section>
              <SocialMediaButton $color={'#2766c5'} $kind={'fb-circular'} />
              <SocialMediaButton $color={'#5bb144'} $kind={'line-reverse'} />
              <SocialMediaButton $kind={'google'} />
              <SocialMediaButton $color={'#4996d1'} $kind={'twitter-white'} />
            </Section>
            <Description>或用 Give++ 帳號</Description>
            <Section>
              <NavButton children={'登入'} to="/login" />
              <NavButton children={'註冊'} to="/register" />
            </Section>
          </Container>
        </Column>
        <BackgroundColumn />
      </ThickNavTwoColumnsPage>
    </>
  );
};

export default EntrancePage;
