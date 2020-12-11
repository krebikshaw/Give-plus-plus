import styled from "styled-components";
import { COLOR, FONT, DISTANCE } from "../../constants/style";
import { ActionButton, NormalButton } from "../../components/Button";
import useProduct from "../../hooks/productHooks/useProduct";

const InfoBlock = styled.section`
  display: flex;
  align-item: center;
  justify-content: space-between;
  margin: 40px 0;
`;
const AvatarContainer = styled.div``;

const Avatar = styled.div`
  background: url(${(props) => props.avatar}) center/cover no-repeat;
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
  color: ${COLOR.text_2};
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
  color: ${COLOR.text_2};
`;

const ContactContainer = styled.div`
  width: 250px;
  position: relative;
  left: -${DISTANCE.sm};
  align-self: center;
  color: ${COLOR.text_2};
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const ContactInfoTitle = styled.div`
  font-size: ${FONT.lg};
  font-weight: bold;
  line-height: normal;
`;

const Email = styled.p`
  font-size: ${FONT.xs};
`;

const InfoLeft = ({ avatar }) => {
  return (
    <AvatarContainer>
      <Avatar avatar={avatar} />
    </AvatarContainer>
  );
};

const InfoMiddle = ({ nickname, products }) => {
  return (
    <InfoContainer>
      <InfoTop>
        <SellerName>{nickname}</SellerName>
        <ActionButton $margin={20}>+ 加入關注</ActionButton>
      </InfoTop>
      <InfoItem products={products} />
    </InfoContainer>
  );
};

const InfoItem = () => {
  const { averageShippingTime, productCount } = useProduct();
  return (
    <InfoBottom>
      <InfoBottomItem>
        <InfoName>商品數量</InfoName>
        <InfoNumber>{productCount}</InfoNumber>
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
        <InfoNumber>
          {averageShippingTime ? `${averageShippingTime} 日內` : ""}
        </InfoNumber>
      </InfoBottomItem>
    </InfoBottom>
  );
};

const InfoRight = ({ email }) => {
  return (
    <ContactContainer>
      <ContactInfo>
        <ContactInfoTitle>聯絡資訊</ContactInfoTitle>
        <NormalButton>聯絡賣家</NormalButton>
      </ContactInfo>
      <Email>{email}</Email>
    </ContactContainer>
  );
};

export const SellerInfo = ({ vendorInfo, products }) => {
  return (
    <InfoBlock>
      <InfoLeft avatar={vendorInfo.avatar_url} />
      <InfoMiddle nickname={vendorInfo.nickname} products={products} />
      <InfoRight email={vendorInfo.email} />
    </InfoBlock>
  );
};
