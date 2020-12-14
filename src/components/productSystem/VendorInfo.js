import { COLOR, FONT } from "../../constants/style";
import styled from "styled-components";
import { ActionButton } from "../Button";
import { useNavigate } from "react-router-dom";
import useProduct from "../../hooks/productHooks/useProduct";
import {
  InfoBlock,
  InfoItem,
  InfoItemTitle,
} from "../../components/productSystem";

const VendorInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const VendorInfoTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const VendorName = styled.div`
  font-size: ${FONT.md};
  color: ${COLOR.text_2};
`;

const AvatarContainer = styled.div`
  position: relative;
  margin-right: 14px;
  width: 75px;
  height: 75px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: url(${process.env.PUBLIC_URL}/logo-g.svg) center/cover no-repeat;
  }
`;

const VendorAvatar = styled.img`
  position: relative;
  margin-right: 14px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: opacity 0.2s;
  object-fit: cover;
  cursor: pointer;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const FollowButton = styled(ActionButton)`
  width: 110px;
  margin-right: 50px;
`;
const ContactButton = styled(ActionButton)`
  width: 110px;
`;

const Buttons = () => {
  return (
    <ButtonsContainer>
      <FollowButton $margin={0}>加入關注</FollowButton>
      <ContactButton $margin={0} $bg={"red"}>
        聯絡賣家
      </ContactButton>
    </ButtonsContainer>
  );
};

const InfoWrap = styled(InfoItem)`
  flex-direction: column;
  color: ${COLOR.text_2};
  padding-bottom: 0;

  ${InfoItemTitle} {
    font-size: ${FONT.sm};

    &:after {
      content: " : ";
    }
  }

  ${InfoItem} {
    margin-top: 0;
    margin-bottom: 10px;
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const InfoItemBlock = styled(InfoBlock)`
  font-weight: normal;
  color: ${COLOR.black};
  height: 20px;
`;

const VendorInfoItem = () => {
  const { averageShippingTime, productCount } = useProduct();
  return (
    <InfoWrap>
      <InfoItem>
        <InfoItemTitle>商品數量</InfoItemTitle>
        <InfoItemBlock>{productCount}</InfoItemBlock>
      </InfoItem>
      <InfoItem>
        <InfoItemTitle>關注人數</InfoItemTitle>
        <InfoItemBlock>2</InfoItemBlock>
      </InfoItem>
      <InfoItem>
        <InfoItemTitle>回應速度</InfoItemTitle>
        <InfoItemBlock>3</InfoItemBlock>
      </InfoItem>
      <InfoItem>
        <InfoItemTitle>平均出貨速度</InfoItemTitle>
        <InfoItemBlock>
          {averageShippingTime ? `${averageShippingTime} 日內` : "暫無商品"}
        </InfoItemBlock>
      </InfoItem>
    </InfoWrap>
  );
};

export const VendorInfo = () => {
  const navigate = useNavigate();
  const { loaded, onLoad, vendorInfo } = useProduct();
  const handleClickSeller = (id) => {
    navigate(`/products/vendor/${id}`);
    window.location.reload();
  };
  return (
    <VendorInfoContainer>
      <VendorInfoTop>
        <AvatarContainer>
          <VendorAvatar
            src={vendorInfo.avatar_url}
            style={{ opacity: loaded ? 1 : 0 }}
            onLoad={onLoad}
            onClick={() => handleClickSeller(vendorInfo.id)}
          />
        </AvatarContainer>
        <VendorName>{vendorInfo.nickname}</VendorName>
      </VendorInfoTop>
      <Buttons />
      <VendorInfoItem />
    </VendorInfoContainer>
  );
};
