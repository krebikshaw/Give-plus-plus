import React, { useEffect } from "react";
import { Navbar } from "../../../components";
import { StandardNavPage } from "../../../components/Page";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import useProduct from "../../../hooks/productHooks/useProduct";
import { useDispatch } from "react-redux";
import {
  Breadcrumb,
  PurchaseInfoLeft,
  PurchaseInfoRight,
} from "../../../components/productSystem";
import {
  setProducts,
  setCategory,
  setHasMoreProducts,
  setErrorMessage,
} from "../../../redux/slices/productSlice/productSlice";

const ProductInfoContainer = styled.section`
  margin-top: 20px;
  display: flex;
`;

const ProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    product,
    vendorInfo,
    products,
    category,
    hasMoreProducts,
    productErrorMessage,
    handleClickVendorMoreButton,
    handleGetProduct,
  } = useProduct();

  useEffect(() => {
    handleGetProduct(id);
    return () => {
      dispatch(setProducts([]));
      dispatch(setCategory([]));
      dispatch(setErrorMessage(null));
      dispatch(setHasMoreProducts(true));
    };
  }, []);
  return (
    <>
      <Navbar />
      <StandardNavPage>
        <Breadcrumb category={category} product={product} />
        <ProductInfoContainer>
          <PurchaseInfoLeft product={product} />
          <PurchaseInfoRight
            product={product}
            products={products}
            id={vendorInfo.id}
            productId={id}
            vendorInfo={vendorInfo}
            hasMoreProducts={hasMoreProducts}
            handler={handleClickVendorMoreButton}
            productErrorMessage={productErrorMessage}
          />
        </ProductInfoContainer>
      </StandardNavPage>
    </>
  );
};

export default ProductPage;
