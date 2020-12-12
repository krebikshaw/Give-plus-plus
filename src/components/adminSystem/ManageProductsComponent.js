import React, { useState } from 'react';
import { SearchBar } from '../../components/adminSystem';
import styled from 'styled-components';
import useAdmin from '../../hooks/adminHooks/useAdmin';
import { DISTANCE } from '../../constants/style';
import { Nav } from '../../components/Button';
import PaginationComponent from '../adminSystem/PaginationComponent';

const ExamineProductContainer = styled.div`
  margin: ${DISTANCE.md} 0;
`;

const ProductsTable = styled.table`
  width: 100%;
  min-width: max-content;
`;

const ProductsThead = styled.thead``;

const ProductsTbody = styled.tbody``;

const ProductTr = styled.tr``;

const ProductTh = styled.th``;

const ProductTd = styled.td`
  text-align: center;
  & a {
    justify-content: center;
  }
`;

const ProductImage = styled.img`
  width: 80px;
  min-width: 80px;
  min-height: 80px;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductsItem = ({ product }) => {
  return (
    <ProductTr>
      <ProductTd>{product.id}</ProductTd>
      <ProductTd>
        <ProductImage src={product.picture_url} />
      </ProductTd>
      <ProductTd>{product.name}</ProductTd>
      <ProductTd>{product.Product_category.name}</ProductTd>
      <ProductTd>{product.price}</ProductTd>
      <ProductTd>{product.createdAt.split('T')[0]}</ProductTd>
      <ProductTd>
        {product.status === '0' && '待審查'}
        {product.status === '1' && '通過'}
        {product.status === '2' && '未通過'}
      </ProductTd>
      <ProductTd>
        <Nav children={'查看'} path={`products/${product.id}`} />
      </ProductTd>
    </ProductTr>
  );
};

export default function ManageProductsComponent() {
  const { products, handleGetProducts, handleSearchProducts } = useAdmin();
  const [isSearch, setIsSearch] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [params, setParams] = useState({
    status: 'all',
    sort: 'createdAt',
    order: 'DESC',
  });

  const handleSearch = (value) => {
    setKeyword(value);
    setIsSearch(true);
    setParams({
      ...params,
      keyword: value ? value : keyword,
    });
    handleSearchProducts({
      ...params,
      keyword: value ? value : keyword,
    });
  };
  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <ExamineProductContainer>
        <ProductsTable>
          <ProductsThead>
            <ProductTr>
              <ProductTh>id</ProductTh>
              <ProductTh>圖片</ProductTh>
              <ProductTh>商品名稱</ProductTh>
              <ProductTh>類別</ProductTh>
              <ProductTh>價格</ProductTh>
              <ProductTh>刊登時間</ProductTh>
              <ProductTh>審核狀態</ProductTh>
              <ProductTh>詳細資訊</ProductTh>
            </ProductTr>
          </ProductsThead>
          <ProductsTbody>
            {products.map((product, index) => (
              <ProductsItem key={index} product={product} />
            ))}
          </ProductsTbody>
        </ProductsTable>
        <PaginationComponent
          propsFunction={isSearch ? handleSearchProducts : handleGetProducts}
          propsParams={params}
        />
      </ExamineProductContainer>
    </>
  );
}
