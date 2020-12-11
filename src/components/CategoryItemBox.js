import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IconComponent } from '../components';
import { COLOR, EFFECT } from '../constants/style';

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
  return (
    <NavLink to={`/products/category/${id}`}>
      <ProductCategoryItem>
        <IconComponent kind={`product_category_${id}`} />
        <p>{text}</p>
      </ProductCategoryItem>
    </NavLink>
  );
};

export default CategoryItemBox;
