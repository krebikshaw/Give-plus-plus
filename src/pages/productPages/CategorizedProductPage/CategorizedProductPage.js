import React, { useEffect } from "react";
import { Navbar } from "../../../components";
import { StandardNavPage } from "../../../components/Page";
import { COLOR, FONT } from "../../../constants/style";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import useProduct from "../../../hooks/productHooks/useProduct";

import { Products, MoreButton } from "../../../components/productSystem";
import { setProducts } from "../../../redux/slices/productSlice/productSlice";

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

const CategorySort = styled.div`
  display: flex;
  align-items: center;
  font-size: ${FONT.xs};
`;

const SortName = styled.div`
  margin-right: 40px;
`;

const Select = styled.select`
  width: 195px;
  padding: 5px 2px;
  color: ${COLOR.text_2};

  ${
    "" /* background: url(${process.env.PUBLIC_URL}/svg/angle-down.svg) no-repeat;
  background-position: right 5px top;
  -moz-appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none; */
  }
  option {
    color: ${COLOR.text_2};
  }
`;

const SortSelect = ({ id, handleChangeCategorySort }) => {
  return (
    <Select onChange={(e) => handleChangeCategorySort(id, e.target.value)}>
      <option value={"latest"}>最新上架優先</option>
      <option value={"lowToHight"}>價格低到高</option>
      <option value={"hightToLow"}>價格高到低</option>
    </Select>
  );
};

const CategoryTitle = ({ id, category, handleChangeCategorySort }) => {
  return (
    <CategoryTitleContainer>
      <CategoryName>分類：{category}</CategoryName>
      <CategorySort>
        <SortName>排序</SortName>
        <SortSelect
          id={id}
          handleChangeCategorySort={handleChangeCategorySort}
        />
      </CategorySort>
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
    hasMoreProducts,
    productErrorMessage,
    handleClickCategoryMoreButton,
    handleGetProductFromCategory,
    handleChangeCategorySort,
  } = useProduct();

  console.log(products);

  useEffect(() => {
    handleGetProductFromCategory(id, 1);
    return () => {
      dispatch(setProducts([]));
    };
  }, []);
  return (
    <>
      <Navbar />
      <StandardNavPage>
        <CategoryTitle
          id={id}
          category={category}
          handleChangeCategorySort={handleChangeCategorySort}
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
