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
  setHasMoreProducts,
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
    hasMoreProducts,
    productErrorMessage,
    handleVendorProductMoreButton,
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
      dispatch(setHasMoreProducts(true));
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
              hasMoreProducts={hasMoreProducts}
              handler={handleVendorProductMoreButton}
              productErrorMessage={productErrorMessage}
            />
          </PurchaseInfo>
        </ProductInfoContainer>
      </StandardNavPage>
    </>
  );
};

export default ProductPage;
