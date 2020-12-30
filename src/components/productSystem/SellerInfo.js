import styled from 'styled-components';
import useProduct from '../../hooks/productHooks/useProduct';
import { COLOR, FONT, DISTANCE, MEDIA_QUERY } from '../../constants/style';
import { ActionButton, NormalButton } from '../../components/Button';
import { VendorContact } from '../../components/productSystem';

const InfoBlock = styled.section`
  display: flex;
  align-item: center;
  justify-content: space-between;
  margin: 40px 0;
`;
const AvatarContainer = styled.div`
  position: relative;
  max-width: 150px;
  max-height: 150px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: url(${process.env.PUBLIC_URL}/logo-g.svg) center/contain
      no-repeat;
  }
`;

const Avatar = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  transition: opacity 0.2s;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
`;

const InfoContainer = styled.div`
  width: 55%;
  border-right: 1px solid ${COLOR.text_2};
  padding-right: 40px;
  align-self: center;

  ${MEDIA_QUERY.lg_1} {
    width: 100%;
    padding-right: 0px;
    border-right: none;
  }
`;

const InfoTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  ${MEDIA_QUERY.lg_1} {
    flex-direction: column;
    margin-bottom: 0px;
    justify-content: center;
  }
`;

const SellerName = styled.div`
  font-size: ${FONT.lg};
  color: ${COLOR.text_2};
  font-weight: bold;
  margin-right: 26px;

  ${MEDIA_QUERY.lg_1} {
    margin-right: 0px;
    margin-bottom: 40px;
  }
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
  margin-left: ${DISTANCE.sm};
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

const InfoLeft = ({ avatar, onLoad, loaded }) => {
  return (
    <AvatarContainer>
      <Avatar
        src={avatar}
        style={{ opacity: loaded ? 1 : 0 }}
        onLoad={onLoad}
      />
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

const VendorInfoWrap = styled.div`
  display: flex;
  justify-content: center;

  ${MEDIA_QUERY.sm} {
    padding: 10px 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;

  ${MEDIA_QUERY.sm} {
    font-size: 10px;
  }
`;

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
          {averageShippingTime ? `${averageShippingTime} 日內` : '暫無商品'}
        </InfoNumber>
      </InfoBottomItem>
    </InfoBottom>
  );
};

const InfoRight = ({ email, isShowContact, setIsShowContact, handleClick }) => {
  return (
    <ContactContainer>
      <ContactInfo>
        <ContactInfoTitle>聯絡資訊</ContactInfoTitle>
        <NormalButton onClick={handleClick}>聯絡賣家</NormalButton>
        {isShowContact && <VendorContact setIsShowContact={setIsShowContact} />}
      </ContactInfo>
      <Email>{email}</Email>
    </ContactContainer>
  );
};

export const SellerInfoMobile = ({
  onLoad,
  loaded,
  vendorInfo,
  products,
  isShowContact,
  setIsShowContact,
  handleClick,
}) => {
  return (
    <InfoContainer>
      <VendorInfoWrap>
        <InfoTop>
          <AvatarContainer>
            <Avatar
              src={vendorInfo.avatar_url}
              style={{ opacity: loaded ? 1 : 0 }}
              onLoad={onLoad}
            />
          </AvatarContainer>
          <SellerName>{vendorInfo.nickname}</SellerName>
          <Buttons>
            <ActionButton $margin={20}>+ 加入關注</ActionButton>
            <ActionButton onClick={handleClick} $margin={20} $bg={'red'}>
              + 加入關注
            </ActionButton>
            {isShowContact && (
              <VendorContact setIsShowContact={setIsShowContact} />
            )}
          </Buttons>
        </InfoTop>
      </VendorInfoWrap>
      <InfoItem products={products} />
    </InfoContainer>
  );
};

export const SellerInfo = ({
  onLoad,
  loaded,
  vendorInfo,
  products,
  isShowContact,
  setIsShowContact,
  handleClick,
}) => {
  return (
    <InfoBlock>
      <InfoLeft
        avatar={vendorInfo.avatar_url}
        onLoad={onLoad}
        loaded={loaded}
      />
      <InfoMiddle nickname={vendorInfo.nickname} products={products} />
      <InfoRight
        email={vendorInfo.email}
        isShowContact={isShowContact}
        setIsShowContact={setIsShowContact}
        handleClick={handleClick}
      />
    </InfoBlock>
  );
};
