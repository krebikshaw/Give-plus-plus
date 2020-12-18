import React, { useEffect } from 'react';
import { StandardNavPage } from '../../../components/Page';
import { COLOR, FONT } from '../../../constants/style';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useProduct from '../../../hooks/productHooks/useProduct';
import { Products, ProductSort } from '../../../components/productSystem';
import {
  setProducts,
  setErrorMessage,
  setHasMoreProducts,
} from '../../../redux/slices/productSlice/productSlice';

const SearchTitleContainer = styled.section`
  margin-top: 220px;
  display: flex;
  justify-content: space-between;
  color: ${COLOR.text_2};
`;

const SearchKeyword = styled.div`
  font-weight: bold;
  font-size: ${FONT.lg};
`;

const SearchTitle = ({ keyword, handleChangeProductSort }) => {
  return (
    <SearchTitleContainer>
      <SearchKeyword>"{keyword}" 相關的商品</SearchKeyword>
      <ProductSort
        id={keyword}
        handleChangeProductSort={handleChangeProductSort}
      />
    </SearchTitleContainer>
  );
};

const SearchProductPage = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { keyword } = useParams();
  const {
    products,
    hasMoreProducts,
    productErrorMessage,
    handleSearchProductMoreButton,
    handleChangeProductSort,
    handleGetSearchProduct,
  } = useProduct();

  useEffect(() => {
    handleGetSearchProduct(keyword);
    return () => {
      dispatch(setProducts([]));
      dispatch(setErrorMessage(null));
      dispatch(setHasMoreProducts(true));
    };
  }, [keyword, dispatch]);
  return (
    <>
      <StandardNavPage>
        <SearchTitle
          keyword={keyword}
          handleChangeProductSort={handleChangeProductSort}
        />
        <Products
          products={products}
          id={keyword}
          hasMoreProducts={hasMoreProducts}
          handler={handleSearchProductMoreButton}
          productErrorMessage={productErrorMessage}
        />
      </StandardNavPage>
    </>
  );
};

export default SearchProductPage;
