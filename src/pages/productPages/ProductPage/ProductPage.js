import React, { useEffect } from 'react';
import { StandardNavPage } from '../../../components/Page';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useProduct from '../../../hooks/productHooks/useProduct';
import { useDispatch } from 'react-redux';
import { MEDIA_QUERY } from '../../../constants/style';
import {
  Breadcrumb,
  PurchaseInfoLeft,
  PurchaseInfoRight,
  SingleProductMobile,
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

  ${MEDIA_QUERY.lg} {
    flex-direction: column;
    align-items: center;
  }
`;

const ProductPage = () => {
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
    handleGetProduct(id, 1);
    return () => {
      dispatch(setProduct([]));
      dispatch(setProducts([]));
      dispatch(setCategory([]));
      dispatch(setErrorMessage(null));
    };
  }, [id, dispatch]);

  const isMobile = window.innerWidth <= 1000;

  return (
    <StandardNavPage>
      <ProductInfoContainer>
        <Breadcrumb category={category} product={product} />
        <PurchaseInfo>
          {isMobile ? (
            <SingleProductMobile
              product={product}
              products={products}
              id={vendorInfo.id}
              vendorInfo={vendorInfo}
              productErrorMessage={productErrorMessage}
            />
          ) : (
            <>
              <PurchaseInfoLeft product={product} category={category} />
              <PurchaseInfoRight
                product={product}
                products={products}
                id={vendorInfo.id}
                productId={id}
                vendorInfo={vendorInfo}
                productErrorMessage={productErrorMessage}
              />
            </>
          )}
        </PurchaseInfo>
      </ProductInfoContainer>
    </StandardNavPage>
  );
};

export default ProductPage;
