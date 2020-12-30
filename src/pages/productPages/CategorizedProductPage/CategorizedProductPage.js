import React, { useEffect } from 'react';
import { StandardNavPage } from '../../../components/Page';
import { COLOR, FONT, MEDIA_QUERY } from '../../../constants/style';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import useProduct from '../../../hooks/productHooks/useProduct';
import { useDispatch } from 'react-redux';
import {
  Products,
  ProductSort,
  ErrorMessage,
} from '../../../components/productSystem';
import {
  setPage,
  setProducts,
  setCategory,
  setErrorMessage,
} from '../../../redux/slices/productSlice/productSlice';

const CategoryTitleContainer = styled.section`
  margin-top: 220px;
  display: flex;
  justify-content: space-between;
  color: ${COLOR.text_2};
  ${MEDIA_QUERY.lg} {
    flex-direction: column;
    align-items: center;
  }
`;

const CategoryName = styled.div`
  min-width: 120px;
  font-weight: bold;
  font-size: ${FONT.lg};
  ${MEDIA_QUERY.lg} {
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
  }
`;

const CategoryTitle = ({ id, category, handleChangeProductSort }) => {
  return (
    <CategoryTitleContainer>
      <CategoryName>分類：{category}</CategoryName>
      <ProductSort id={id} handleChangeProductSort={handleChangeProductSort} />
    </CategoryTitleContainer>
  );
};

const CategorizedProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    products,
    category,
    productErrorMessage,
    handleCategoryProductMoreButton,
    handleGetProductFromCategory,
    handleChangeProductSort,
  } = useProduct();

  if (productErrorMessage === '查無此分類') navigate('/');
  useEffect(() => {
    window.scroll(0, 0);
    dispatch(setPage(1));
    handleGetProductFromCategory(id, 1);
    return () => {
      dispatch(setProducts([]));
      dispatch(setCategory([]));
      dispatch(setErrorMessage(null));
    };
  }, [id, dispatch]);
  return (
    <>
      <StandardNavPage>
        {productErrorMessage ? (
          <ErrorMessage
            $margin={'250px'}
            productErrorMessage={productErrorMessage}
          />
        ) : (
          <>
            <CategoryTitle
              id={id}
              category={category}
              handleChangeProductSort={handleChangeProductSort}
            />
            <Products
              products={products}
              id={id}
              handler={handleCategoryProductMoreButton}
              productErrorMessage={productErrorMessage}
            />
          </>
        )}
      </StandardNavPage>
    </>
  );
};

export default CategorizedProductPage;
