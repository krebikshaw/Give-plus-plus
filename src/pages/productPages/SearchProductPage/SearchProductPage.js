import React, { useEffect } from 'react';
import { StandardNavPage } from '../../../components/Page';
import { COLOR, FONT, MEDIA_QUERY } from '../../../constants/style';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useProduct from '../../../hooks/productHooks/useProduct';
import { Products, ProductSort } from '../../../components/productSystem';
import {
  setProducts,
  setErrorMessage,
} from '../../../redux/slices/productSlice/productSlice';

const SearchTitleContainer = styled.section`
  margin-top: 220px;
  display: flex;
  justify-content: space-between;
  color: ${COLOR.text_2};

  ${MEDIA_QUERY.lg} {
    flex-direction: column;
    align-items: center;
  }
`;

const SearchKeyword = styled.div`
  min-width: 160px;
  font-weight: bold;
  font-size: ${FONT.lg};

  ${MEDIA_QUERY.lg} {
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
  }
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
    productErrorMessage,
    handleSearchProductMoreButton,
    handleChangeProductSort,
    handleGetSearchProduct,
  } = useProduct();

  useEffect(() => {
    handleGetSearchProduct(keyword, 1);
    return () => {
      dispatch(setProducts([]));
      dispatch(setErrorMessage(null));
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
          handler={handleSearchProductMoreButton}
          productErrorMessage={productErrorMessage}
        />
      </StandardNavPage>
    </>
  );
};

export default SearchProductPage;
