import React, { useEffect } from 'react';
import styled from 'styled-components';
import useAdmin from '../../hooks/adminHooks/useAdmin';
import { DISTANCE } from '../../constants/style';
import { ActionButton } from '../../components/Button';
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
  max-width: 100px;
  padding: 0 10px;
`;

const ProductImage = styled.img`
  width: 80px;
  min-height: 80px;
  min-width: 80px;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductsItem = ({ product }) => {
  const { setThousandths } = useAdmin();

  return (
    <ProductTr>
      <ProductTd>{product.id}</ProductTd>
      <ProductTd>
        <ProductImage src={product.picture_url} />
      </ProductTd>
      <ProductTd>{product.name}</ProductTd>
      <ProductTd>{product.Product_category.name}</ProductTd>
      <ProductTd>{setThousandths(product.price)}</ProductTd>
      <ProductTd>{product.createdAt.split('T')[0]}</ProductTd>
      <ProductTd>
        <ExamineSelector product={product} />
      </ProductTd>
    </ProductTr>
  );
};

export default function ExamineProduct() {
  const { products, handleGetUnCheckProducts } = useAdmin();

  useEffect(() => {
    handleGetUnCheckProducts();
  }, []);

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
      <BottomContainer>
        <ActionButton onClick={() => window.location.reload()}>
          送出
        </ActionButton>
      </BottomContainer>
    </ExamineProductContainer>
  );
}
