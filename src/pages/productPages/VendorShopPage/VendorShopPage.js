import React, { useEffect } from 'react';
import styled from 'styled-components';
import { COLOR, FONT, DISTANCE } from '../../../constants/style';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { StandardNavPage } from '../../../components/Page';
import useProduct from '../../../hooks/productHooks/useProduct';
import {
  Banner,
  SellerInfo,
  Announcement,
  Products,
} from '../../../components/productSystem';
import {
  setProducts,
  setHasMoreProducts,
  setErrorMessage,
} from '../../../redux/slices/productSlice/productSlice';

const SellerProductTitle = styled.div`
  margin: ${DISTANCE.sm} auto;
  padding-bottom: ${DISTANCE.sm};
  font-size: ${FONT.lg};
  color: ${COLOR.text_2};
  border-bottom: 1px solid ${COLOR.text_2};
`;

const VendorShopPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    loaded,
    onLoad,
    vendorInfo,
    products,
    hasMoreProducts,
    productErrorMessage,
    handleVendorProductMoreButton,
    handleGetProductsFromVendor,
  } = useProduct();

  useEffect(() => {
    handleGetProductsFromVendor(id, 1);
    return () => {
      dispatch(setProducts([]));
      dispatch(setErrorMessage(null));
      dispatch(setHasMoreProducts(true));
    };
  }, [id, dispatch]);

  return (
    <>
      <StandardNavPage>
        <Banner
          banner={vendorInfo.banner_url}
          loaded={loaded}
          onLoad={onLoad}
        />
        <SellerInfo
          vendorInfo={vendorInfo}
          products={products}
          loaded={loaded}
          onLoad={onLoad}
        />
        <Announcement announcement={vendorInfo.announcement} />
        <SellerProductTitle>刊登商品</SellerProductTitle>
        <Products
          products={products}
          id={id}
          hasMoreProducts={hasMoreProducts}
          handler={handleVendorProductMoreButton}
          productErrorMessage={productErrorMessage}
        />
      </StandardNavPage>
    </>
  );
};

export default VendorShopPage;
