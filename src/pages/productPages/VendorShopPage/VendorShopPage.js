import React, { useEffect } from "react";
import styled from "styled-components";
import { COLOR, FONT, DISTANCE } from "../../../constants/style";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Navbar } from "../../../components";
import { StandardNavPage } from "../../../components/Page";
// import { NormalButton, ActionButton, Nav } from "../../../components/Button";
import useProduct from "../../../hooks/productHooks/useProduct";
import useUser from "../../../hooks/userHooks/useUser";
import {
  Banner,
  SellerInfo,
  Announcement,
  Products,
  MoreButton,
} from "../../../components/productSystem";

const SellerProductTitle = styled.div`
  margin: ${DISTANCE.sm} auto;
  padding-bottom: ${DISTANCE.sm};
  font-size: ${FONT.lg};
  color: ${COLOR.text_2};
  border-bottom: 1px solid ${COLOR.text_2};
`;

const VendorShopPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    products,
    hasMoreProducts,
    productErrorMessage,
    handleClickVendorMoreButton,
    handleGetProductsFromVendor,
  } = useProduct();
  const { vendorInfo, userErrorMessage, handleGetVendorInfo } = useUser();
  if (userErrorMessage) navigate("/");

  useEffect(() => {
    handleGetVendorInfo(id);
    handleGetProductsFromVendor(id, 1);
  }, []);

  return (
    <>
      <Navbar />
      <StandardNavPage>
        <Banner banner={vendorInfo.banner_url} />
        <SellerInfo vendorInfo={vendorInfo} products={products} />
        <Announcement announcement={vendorInfo.announcement} />
        <SellerProductTitle>刊登商品</SellerProductTitle>
        <Products products={products} vendorName={vendorInfo.nickname} />
        <MoreButton
          id={id}
          products={products}
          hasMoreProducts={hasMoreProducts}
          handler={handleClickVendorMoreButton}
          productErrorMessage={productErrorMessage}
        />
      </StandardNavPage>
    </>
  );
};

export default VendorShopPage;
