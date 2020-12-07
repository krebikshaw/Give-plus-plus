import React, { useEffect } from "react";
import styled from "styled-components";
import { COLOR, FONT, DISTANCE } from "../../../constants/style";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, IconComponent } from "../../../components";
import { StandardNavPage } from "../../../components/Page";
import { NormalButton, ActionButton, Nav } from "../../../components/Button";
import useProduct from "../../../hooks/productHooks/useProduct";

const Banner = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 250px;
  background: ${COLOR.bg_mask};
`;

const SellerInfo = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
  margin: 40px 0;
`;
const AvatarContainer = styled.div``;

const Avatar = styled.div`
  background: url(https://avatars3.githubusercontent.com/u/64968174?s=460&u=cef1134830ec747c2e83f09df33ed9a24fc9cb19&v=4)
    center/cover no-repeat;
  height: 150px;
  width: 150px;
`;

const InfoContainer = styled.div`
  width: 55%;
  border-right: 1px solid ${COLOR.text_2};
  padding-right: 120px;
  align-self: center;
`;

const InfoTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const SellerName = styled.div`
  font-size: ${FONT.lg};
  font-weight: bold;
  margin-right: 26px;
`;

const InfoBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoBottomItem = styled.div`
  margin: 5px 20px 5px 0;
  width: 90px;
`;

const InfoName = styled.p`
  color: ${COLOR.text_2};
`;

const InfoNumber = styled.div`
  color: ${COLOR.text_1};
`;

const ContactContainer = styled.div`
  align-self: center;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const ContactInfoTitle = styled.div`
  font-size: ${FONT.lg};
  line-height: normal;
  margin-bottom: ${DISTANCE.sm};
`;

const Email = styled.p`
  font-size: ${FONT.xs};
`;

const InfoItem = () => {
  return (
    <InfoBottom>
      <InfoBottomItem>
        <InfoName>商品數量</InfoName>
        <InfoNumber>1</InfoNumber>
      </InfoBottomItem>
      <InfoBottomItem>
        <InfoName>關注人數</InfoName>
        <InfoNumber>2</InfoNumber>
      </InfoBottomItem>
      <InfoBottomItem>
        <InfoName>回應速度</InfoName>
        <InfoNumber>3</InfoNumber>
      </InfoBottomItem>
      <InfoBottomItem>
        <InfoName>平均出貨速度</InfoName>
        <InfoNumber>4</InfoNumber>
      </InfoBottomItem>
    </InfoBottom>
  );
};

const VendorShopPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, handleGetProductsFromVendor } = useProduct();

  console.log(products);
  useEffect(() => {
    //handleGetProductsFromVendor(id);
  }, [handleGetProductsFromVendor, id]);

  return (
    <>
      <Navbar />
      <StandardNavPage>
        <Banner />
        <SellerInfo>
          <AvatarContainer>
            <Avatar />
          </AvatarContainer>
          <InfoContainer>
            <InfoTop>
              <SellerName>test</SellerName>
              <ActionButton $margin={0}>+ 加入關注</ActionButton>
            </InfoTop>
            <InfoItem />
          </InfoContainer>
          <ContactContainer>
            <ContactInfo>
              <ContactInfoTitle>聯絡資訊</ContactInfoTitle>
              {/* <NormalButton $margin={0}>聯絡賣家</NormalButton> */}
            </ContactInfo>
            <Email>電子郵件：final-project@gmail.com</Email>
          </ContactContainer>
        </SellerInfo>
      </StandardNavPage>
    </>
  );
};

export default VendorShopPage;
