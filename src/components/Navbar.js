import React from 'react';
import styled from 'styled-components';
import IconComponent from './general/Icon';
import Button from './general/Button';

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 110px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
  padding: 15px 0;
  z-index: 99;
`;

const NavbarTop = styled.div`
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

const InputSearch = styled.input`
  outline: none;
  border: none;
  background: rgba(0, 0, 0, 0);
`;

const RightSide = styled.div`
  margin-right: 90px;
`;

const Logo = styled.div`
  background: url(${process.env.PUBLIC_URL}/logo.png) center/cover;
  height: 32px;
  width: 100px;
`;

const OptionList = styled.div`
  display: flex;
  align-items: center;
`;

const SearchBarContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 32px;
  border-radius: 8px;
  background: #f1f3f4;
  margin-left: 40px;
  & div {
    display: flex;
    align-items: center;
  }
`;

const ProductCategoryContainer = styled.ul`
  display: flex;
  align-items: center;
`;

const ProductCategoryItem = styled.li`
  margin: 0 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  & p {
    margin-left: -5px;
  }
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <div>
        <IconComponent kind={'search'} />
        <InputSearch placeholder='搜尋物品' />
      </div>
      <IconComponent kind={'angle-down'} />
    </SearchBarContainer>
  );
};

const ProductCategoriesList = () => {
  return (
    <ProductCategoryContainer>
      <ProductCategoryItem>
        <IconComponent kind={'schedule'} />
        <p>生活</p>
      </ProductCategoryItem>
      <ProductCategoryItem>
        <IconComponent kind={'desktop'} />
        <p>3C</p>
      </ProductCategoryItem>
      <ProductCategoryItem>
        <IconComponent kind={'coffee'} />
        <p>休閒</p>
      </ProductCategoryItem>
      <ProductCategoryItem>
        <IconComponent kind={'dropbox'} />
        <p>服飾</p>
      </ProductCategoryItem>
      <ProductCategoryItem>
        <IconComponent kind={'sanitizer-alt'} />
        <p>美妝</p>
      </ProductCategoryItem>
      <ProductCategoryItem>
        <IconComponent kind={'postcard'} />
        <p>票券</p>
      </ProductCategoryItem>
      <ProductCategoryItem>
        <IconComponent kind={'books'} />
        <p>書籍</p>
      </ProductCategoryItem>
      <ProductCategoryItem>
        <IconComponent kind={'bug'} />
        <p>寵物</p>
      </ProductCategoryItem>
      <ProductCategoryItem>
        <IconComponent kind={'crockery'} />
        <p>烹飪</p>
      </ProductCategoryItem>
      <ProductCategoryItem>
        <IconComponent kind={'basketball'} />
        <p>運動</p>
      </ProductCategoryItem>
      <ProductCategoryItem>
        <IconComponent kind={'gift'} />
        <p>綜合</p>
      </ProductCategoryItem>
      <ProductCategoryItem>
        <IconComponent kind={'more'} />
        <p>其他</p>
      </ProductCategoryItem>
    </ProductCategoryContainer>
  );
};

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarTop>
        <LeftSide>
          <Logo />
          <SearchBar />
        </LeftSide>
        <RightSide>
          <OptionList>
            <IconComponent kind={'user-circle'} />
            <IconComponent kind={'shopping-cart'} />
            <IconComponent kind={'setting'} />
            <IconComponent kind={'bed'} />
            <Button text={'登入 / 註冊'} width={5} />
          </OptionList>
        </RightSide>
      </NavbarTop>
      <NavbarBottom>
        <ProductCategoriesList />
      </NavbarBottom>
    </NavbarContainer>
  );
};

export default Navbar;
