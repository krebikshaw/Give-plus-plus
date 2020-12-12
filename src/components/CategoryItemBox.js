import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { IconComponent } from "../components";
import { COLOR, EFFECT } from "../constants/style";

const ProductCategoryItem = styled.li`
  margin: 0 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  & p {
    margin-left: -5px;
    color: ${COLOR.black};
    min-width: fit-content;
    &:hover {
      color: ${COLOR.hover};
    }
  }
  &:hover {
    box-shadow: ${EFFECT.shadowHover};
  }
`;

const CategoryItemBox = ({ text, id }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleGetProductFromCategory = (id) => {
    if (location.pathname.includes("category")) {
      navigate(`/products/category/${id}`);
      window.location.reload();
    }
    navigate(`/products/category/${id}`);
  };
  return (
    <ProductCategoryItem onClick={() => handleGetProductFromCategory(id)}>
      <IconComponent kind={`product_category_${id}`} />
      <p>{text}</p>
    </ProductCategoryItem>
  );
};

export default CategoryItemBox;
