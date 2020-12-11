import React, { useEffect } from "react";
import { Navbar } from "../../../components";
import { StandardNavPage } from "../../../components/Page";
import { COLOR, FONT } from "../../../constants/style";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import useProduct from "../../../hooks/productHooks/useProduct";

import {
  Products,
  MoreButton,
  ProductSort,
} from "../../../components/productSystem";

const CategoryTitleContainer = styled.section`
  margin-top: 220px;
  display: flex;
  justify-content: space-between;
  color: ${COLOR.text_2};
`;

const CategoryName = styled.div`
  font-weight: bold;
  font-size: ${FONT.lg};
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
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    products,
    category,
    hasMoreProducts,
    productErrorMessage,
    handleClickCategoryMoreButton,
    handleGetProductFromCategory,
    handleChangeProductSort,
  } = useProduct();

  if (productErrorMessage === "查無此分類") navigate("/");

  useEffect(() => {
    handleGetProductFromCategory(id, 1);
  }, []);
  return (
    <>
      <Navbar />
      <StandardNavPage>
        <CategoryTitle
          id={id}
          category={category}
          handleChangeProductSort={handleChangeProductSort}
        />
        <Products products={products} />
        <MoreButton
          id={id}
          products={products}
          hasMoreProducts={hasMoreProducts}
          handler={handleClickCategoryMoreButton}
          productErrorMessage={productErrorMessage}
        />
      </StandardNavPage>
    </>
  );
};

export default CategorizedProductPage;