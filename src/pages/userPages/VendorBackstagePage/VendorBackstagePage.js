import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLOR, FONT, DISTANCE } from '../../../constants/style';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Navbar } from '../../../components';
import { StandardNavPage } from '../../../components/Page';
import useUser from '../../../hooks/userHooks/useUser';
import useProduct from '../../../hooks/productHooks/useProduct';
import { NormalButton, Nav } from '../../../components/Button';
import {
  SellerInfo,
  SetAnnouncementComponent,
  Products,
} from '../../../components/userSystem';
import { Banner, Announcement } from '../../../components/productSystem';
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
  display: flex;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  width: 100%;
  text-align: right;
  & > button {
    position: absolute;
    transform: translate(-150%, 50px);
    &:hover {
      transform: translate(-150%, 50px);
    }
  }
`;

const VendorBackstagePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState(null);
  const [isSettingAnnouncement, setIsSettingAnnouncement] = useState(false);
  const { user, handleGetMe } = useUser();
  const {
    loaded,
    onLoad,
    vendorInfo,
    products,
    hasMoreProducts,
    productErrorMessage,
    handleClickVendorMoreButton,
    handleGetProductsFromVendor,
  } = useProduct();

  const handleSetAnnouncement = () => {
    setIsSettingAnnouncement(true);
  };

  useEffect(() => {
    window.scroll(0, 0);
    handleGetMe().then((result) => {
      if (!result.data.is_vendor) navigate('/');
      setId(result.data.userId);
      handleGetProductsFromVendor(result.data.userId, 1);
    });
    return () => {
      dispatch(setProducts([]));
      dispatch(setErrorMessage(null));
      dispatch(setHasMoreProducts(true));
    };
  }, []);

  return (
    <StandardNavPage>
      <Banner banner={vendorInfo.banner_url} loaded={loaded} onLoad={onLoad} />
      <SellerInfo
        vendorInfo={vendorInfo}
        products={products}
        loaded={loaded}
        onLoad={onLoad}
      />
      <ButtonContainer>
        <NormalButton onClick={handleSetAnnouncement}>編輯公告</NormalButton>
      </ButtonContainer>
      {isSettingAnnouncement && (
        <SetAnnouncementComponent
          setIsSettingAnnouncement={setIsSettingAnnouncement}
        />
      )}
      <Announcement announcement={user.announcement} />

      <SellerProductTitle>
        <p>刊登商品 </p>
        <Nav children={'新增商品'} path={'/products/post'} />
      </SellerProductTitle>
      <Products
        products={products}
        id={id}
        hasMoreProducts={hasMoreProducts}
        handler={handleClickVendorMoreButton}
        productErrorMessage={productErrorMessage}
      />
    </StandardNavPage>
  );
};

export default VendorBackstagePage;
