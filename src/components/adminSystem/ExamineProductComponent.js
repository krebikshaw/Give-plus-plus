import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useAdmin from '../../hooks/adminHooks/useAdmin';
import { COLOR, FONT, DISTANCE, EFFECT } from '../../constants/style';
import { Nav } from '../../components/Button';
import { ExamineSelector } from '../../components/adminSystem';

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
`;

const ProductImage = styled.img`
  width: 80px;
  min-width: 80px;
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
        <ExamineSelector product={product} />
      </ProductTd>
    </ProductTr>
  );
};

export default function ExamineProductComponent() {
  const { products, handleGetUnExamineProducts } = useAdmin();

  useEffect(() => {
    handleGetUnExamineProducts();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
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
            <ProductTh>審查</ProductTh>
          </ProductTr>
        </ProductsThead>
        <ProductsTbody>
          {products.map((product, index) => (
            <ProductsItem key={index} product={product} />
          ))}
        </ProductsTbody>
      </ProductsTable>
    </ExamineProductContainer>
  );
}
