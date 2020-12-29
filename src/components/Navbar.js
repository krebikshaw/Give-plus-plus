import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Nav, NormalButton } from './Button';
import { User, Cart, Notification } from './navbarSystem';
import { Logo, SearchBar, CategoryItemBox } from '../components';
import { useLocation } from 'react-router-dom';
import useUser from '../hooks/userHooks/useUser';
import useProduct from '../hooks/productHooks/useProduct';
import useLogout from '../hooks/userHooks/useLogout';
import { MEDIA_QUERY } from '../constants/style';
import {
  selectUserId,
  selectIsUserLoading,
} from '../redux/slices/generalSlice/generalSlice';
import { useSelector } from 'react-redux';

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${(props) => (props.$size === 'sm' ? '65px' : '110px')};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
  padding: 15px 0;
  z-index: 99;
  ${MEDIA_QUERY.lg} {
    height: ${(props) => (props.$size === 'sm' ? '65px' : '135px')};
  }
  ${MEDIA_QUERY.sm} {
    height: ${(props) => (props.$size === 'sm' ? '65px' : '165px')};
  }
`;

const NavbarTop = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const NavbarBottom = styled.div`
  display: flex;
  justify-content: center;
  ${MEDIA_QUERY.lg} {
    flex-wrap: wrap;
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;
  ${MEDIA_QUERY.md} {
    margin-left: 20px;
  }
`;

const RightSide = styled.div`
  margin-right: 90px;
  ${MEDIA_QUERY.md} {
    margin-right: 20px;
  }
`;

const OptionList = styled.div`
  display: flex;
  align-items: center;
`;

const Empty = styled.div`
  width: 90px;
`;

const Navbar = () => {
  const location = useLocation();
  const { user } = useUser();
  const { productCategories, handleGetProductCategories } = useProduct();
  const { handleLogout } = useLogout();
  const currentPath = location.pathname;
  const userId = useSelector(selectUserId);
  const isUserLoading = useSelector(selectIsUserLoading);
  const [isAdmin, setIsAdmin] = useState(false);
  const { handleGetMe } = useUser();

  const handleClickLogout = () => {
    handleLogout();
    setIsAdmin(false);
  };

  useEffect(() => {
    if (currentPath === '/' || currentPath.includes('products')) {
      handleGetProductCategories();
    }
    handleGetMe().then((result) => {
      if (!result || result.ok === 0 || !result.data) return;
      setIsAdmin(result.data.is_admin);
    });
  }, []);

  useEffect(() => {
    setIsAdmin(user.is_admin);
  }, [user]);

  return (
    <NavbarContainer
      $size={
        currentPath === '/' || currentPath.includes('products') ? '' : 'sm'
      }
    >
      <NavbarTop>
        <LeftSide>
          <Logo />
          <SearchBar />
        </LeftSide>

        <RightSide>
          <OptionList>
            {isAdmin && <Nav children={'管理後台'} path={'/admin'} />}
            {userId && (
              <>
                <User />
                <Cart />
                <Notification />
              </>
            )}
            {isUserLoading ? (
              <Empty />
            ) : (
              <>
                {userId && (
                  <NormalButton children='登出' onClick={handleClickLogout} />
                )}
                {!userId && <Nav children={'登入 / 註冊'} path={'/entrance'} />}
              </>
            )}
          </OptionList>
        </RightSide>
      </NavbarTop>

      {(currentPath === '/' || currentPath.includes('products')) && (
        <NavbarBottom>
          {productCategories.map((category) => (
            <CategoryItemBox
              text={category.name}
              id={category.id}
              key={category.id}
            />
          ))}
        </NavbarBottom>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
