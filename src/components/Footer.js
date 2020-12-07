import React from 'react';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants/style';
import IconComponent from '../components/Icon';
import { NavLink, useLocation } from 'react-router-dom';

const FooterContainer = styled.div`
  height: 150px;
  background: ${COLOR.bg_secondary};
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FooterItems = styled.ul`
  width: 60%;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: fit-content;
`;

const ItemContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

const Item = styled.div`
  font-size: ${FONT.xs};
  font-weight: bold;
  color: ${COLOR.black};
  margin-bottom: 10px;
`;

const IconsContainer = styled.ul`
  width: 60%;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconItem = styled.li`
  display: flex;
  cursor: pointer;
`;

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return currentPath === '/entrance' ||
    currentPath === '/login' ||
    currentPath === '/register' ? null : (
    <FooterContainer>
      <FooterItems>
        <ItemContainer>
          <NavLink to={'/faq'}>
            <Item>FAQ</Item>
          </NavLink>
        </ItemContainer>
        <ItemContainer>
          <NavLink to={'/rules/1'}>
            <Item>免責聲明</Item>
          </NavLink>
        </ItemContainer>
        <ItemContainer>
          <NavLink to={'/rules/2'}>
            <Item>退貨政策</Item>
          </NavLink>
        </ItemContainer>
        <ItemContainer>
          <NavLink to={'/rules/3'}>
            <Item>隱私權條款</Item>
          </NavLink>
        </ItemContainer>
        <ItemContainer>
          <NavLink to={'/about'}>
            <Item>關於我們</Item>
          </NavLink>
        </ItemContainer>
        <ItemContainer>
          <NavLink to={'/contact'}>
            <Item>聯絡我們</Item>
          </NavLink>
        </ItemContainer>
        <ItemContainer>
          <IconsContainer>
            <IconItem>
              <IconComponent kind={'facebook'} />
            </IconItem>
            <IconItem>
              <IconComponent kind={'twitter'} />
            </IconItem>
            <IconItem>
              <IconComponent kind={'line'} />
            </IconItem>
            <IconItem>
              <IconComponent kind={'github'} />
            </IconItem>
          </IconsContainer>
        </ItemContainer>
      </FooterItems>
    </FooterContainer>
  );
};

export default Footer;
