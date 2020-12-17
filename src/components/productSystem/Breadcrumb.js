import { COLOR } from '../../constants/style';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const BreadcrumbContainer = styled.section``;

const BreadcrumbRoute = styled.nav`
  display: block;
`;

const BreadcrumbLi = styled.li`
  a {
    color: #007bff;
    display: inline-block;
    &:hover {
      color: ${COLOR.hover};
      text-decoration: underline;
    }
  }

  &:not(:first-child) {
    &:before {
      display: inline-block;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
      color: #6c757d;
      content: '/';
    }
  }

  &:last-child {
    a {
      color: ${COLOR.black};
      cursor: none;
      text-decoration: none;
    }
  }
`;

const BreadcrumbOl = styled.ol`
  display: flex;
  flex-wrap: wrap;
  padding: 0.75rem 1rem 0.75rem 0;
  margin-bottom: 1rem;
  list-style: none;
`;

const BreadcrumbItems = ({ category, product }) => {
  return (
    <>
      {category && product ? (
        <BreadcrumbOl>
          <BreadcrumbLi>
            <NavLink to='/'>Home</NavLink>
          </BreadcrumbLi>
          <BreadcrumbLi>
            <a href={`/products/category/${product.ProductCategoryId}`}>
              {category}
            </a>
          </BreadcrumbLi>
          <BreadcrumbLi>
            <NavLink to='#'>{product.name}</NavLink>
          </BreadcrumbLi>
        </BreadcrumbOl>
      ) : (
        <BreadcrumbOl>
          <BreadcrumbLi>
            <NavLink to='/'>Home</NavLink>
          </BreadcrumbLi>
        </BreadcrumbOl>
      )}
    </>
  );
};

export const Breadcrumb = ({ category, product }) => {
  return (
    <BreadcrumbContainer>
      <BreadcrumbRoute>
        <BreadcrumbItems category={category} product={product} />
      </BreadcrumbRoute>
    </BreadcrumbContainer>
  );
};
