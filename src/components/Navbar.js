import React, { useEffect } from "react";
import styled from "styled-components";
import { Nav, NormalButton } from "./Button";
import { Logo, IconComponent, SearchBar, CategoryItemBox } from "../components";
import { useLocation } from "react-router-dom";
import useProduct from "../hooks/productHooks/useProduct";
import useLogout from "../hooks/userHooks/useLogout";
import {
  selectUserId,
  selectIsUserLoading,
} from "../redux/slices/generalSlice/generalSlice";
import { useSelector } from "react-redux";

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${(props) => (props.$size === "sm" ? "65px" : "110px")};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
  padding: 15px 0;
  z-index: 99;
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
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;
`;

const RightSide = styled.div`
  margin-right: 90px;
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
  const { productCategories, handleGetProductCategories } = useProduct();
  const { handleLogout } = useLogout();
  const currentPath = location.pathname;
  const userId = useSelector(selectUserId);
  const isUserLoading = useSelector(selectIsUserLoading);

  useEffect(() => {
    if (currentPath === "/" || currentPath.includes("products")) {
      handleGetProductCategories();
    }
  }, []);

  return (
    <NavbarContainer
      $size={
        currentPath === "/" || currentPath.includes("products") ? "" : "sm"
      }
    >
      <NavbarTop>
        <LeftSide>
          <Logo />
          <SearchBar />
        </LeftSide>

        <RightSide>
          <OptionList>
            <IconComponent kind={"user-circle"} />
            <IconComponent kind={"shopping-cart"} />
            <IconComponent kind={"setting"} />
            <IconComponent kind={"moon"} />
            {isUserLoading ? (
              <Empty />
            ) : (
              <>
                {userId && (
                  <NormalButton children='登出' onClick={handleLogout} />
                )}
                {!userId && <Nav children={"登入 / 註冊"} path={"/entrance"} />}
              </>
            )}
          </OptionList>
        </RightSide>
      </NavbarTop>

      {(currentPath === "/" || currentPath.includes("products")) && (
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
