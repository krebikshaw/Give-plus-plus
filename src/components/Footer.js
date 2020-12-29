import React from 'react';
import styled from 'styled-components';
import { COLOR, FONT, DISTANCE, MEDIA_QUERY } from '../constants/style';
import IconComponent from '../components/Icon';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentRule } from '../redux/slices/generalSlice/generalSlice';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
  background: ${COLOR.bg_secondary};
`;

const FooterItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
  min-width: fit-content;
  ${MEDIA_QUERY.md} {
    width: 90%;
    flex-wrap: wrap;
  }
`;

const Nav = styled(NavLink)`
  font-size: ${FONT.xs};
  font-weight: bold;
  color: ${COLOR.black};
  margin: ${DISTANCE.sm};
  :hover {
    color: ${COLOR.hover};
  }
`;

const Items = styled.div`
  display: flex;
`;

const Item = styled.span``;

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const dispatch = useDispatch();
  return currentPath === '/entrance' ||
    currentPath === '/login' ||
    currentPath === '/register' ? null : (
    <FooterContainer>
      <FooterItems>
        <Nav to={'/faq'} children={'FAQ'} />
        <Nav
          onClick={() => dispatch(setCurrentRule('rule1'))}
          to={'/rules#rule1'}
          children={'免責聲明'}
        />
        <Nav
          onClick={() => dispatch(setCurrentRule('rule2'))}
          to={'/rules#rule2'}
          children={'退貨政策'}
        />
        <Nav
          onClick={() => dispatch(setCurrentRule('rule3'))}
          to={'/rules#rule3'}
          children={'隱私權條款'}
        />
        <Nav to={'/about'} children={'關於我們'} />
        <Nav to={'/contact'} children={'聯絡我們'} />
        <Items>
          <Item>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/krebikshaw/second-hand-trading-platform-frontend'
            >
              <IconComponent kind={'github'} />
            </a>
          </Item>
        </Items>
      </FooterItems>
    </FooterContainer>
  );
};

export default Footer;
