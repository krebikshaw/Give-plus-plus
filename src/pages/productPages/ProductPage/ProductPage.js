import React, { useEffect } from 'react';
import { StandardNavPage } from '../../../components/Page';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import useProduct from '../../../hooks/productHooks/useProduct';
import { useDispatch } from 'react-redux';
import {
  Breadcrumb,
  PurchaseInfoLeft,
  PurchaseInfoRight,
} from '../../../components/productSystem';
import {
  setProduct,
  setProducts,
  setCategory,
  setErrorMessage,
} from '../../../redux/slices/productSlice/productSlice';

const ProductInfoContainer = styled.section`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PurchaseInfo = styled.section`
  display: flex;
`;

const ProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    product,
    vendorInfo,
    products,
    category,
    productErrorMessage,
    handleGetProduct,
  } = useProduct();

  useEffect(() => {
    window.scroll(0, 0);
    handleGetProduct(id);
    return () => {
      dispatch(setProduct([]));
      dispatch(setProducts([]));
      dispatch(setCategory([]));
      dispatch(setErrorMessage(null));
    };
  }, [id, dispatch]);
  return (
    <>
      <StandardNavPage>
        <ProductInfoContainer>
          <Breadcrumb category={category} product={product} />
          <PurchaseInfo>
            <PurchaseInfoLeft product={product} category={category} />
            <PurchaseInfoRight
              product={product}
              products={products}
              id={vendorInfo.id}
              productId={id}
              vendorInfo={vendorInfo}
              productErrorMessage={productErrorMessage}
            />
          </PurchaseInfo>
        </ProductInfoContainer>
      </StandardNavPage>
    </>
  );
};

export default ProductPage;
