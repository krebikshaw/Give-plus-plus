import { COLOR, FONT, DISTANCE } from '../../constants/style';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import useProduct from '../../hooks/productHooks/useProduct';

const ProductPictureContainer = styled.div`
  position: relative;
  margin-bottom: 65px;
  height: 400px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: url(${process.env.PUBLIC_URL}/logo.svg) center/contain no-repeat;
    object-fit: cover;
  }
`;

const ProductPicture = styled.img`
  position: relative;
  transition: opacity 0.2s;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfoTitle = styled.div`
  margin: ${DISTANCE.sm} auto;
  padding-bottom: ${DISTANCE.sm};
  font-size: ${FONT.lg};
  color: ${COLOR.text_2};
  border-bottom: 1px solid ${COLOR.text_2};
`;

export const InfoBlock = styled.div`
  width: 400px;
  height: 100px;
  font-weight: bold;
  line-height: 1.5rem;
  color: ${COLOR.black};
  white-space: pre-line;
  word-break: break-all;
`;

const ProductInfoWrap = styled.div`
  min-height: 180px;
  line-height: 1.5rem;
  width: 100%;
  font-weight: normal;
  color: ${COLOR.text_2};
  white-space: pre-line;
  word-break: break-all;
`;

export const InfoItem = styled.div`
  margin-top: ${DISTANCE.sm};
  display: flex;
  padding-bottom: ${DISTANCE.sm};
  &:not(:last-child) {
    border-bottom: 1px solid ${COLOR.text_2};
  }
`;
export const InfoItemTitle = styled.div`
  width: 150px;
  padding-right: 20px;
  font-size: ${FONT.md};
  color: ${COLOR.text_2};
  word-break: break-all;
`;

const ProductIntro = ({ product }) => {
  return (
    <>
      <InfoTitle>商品介紹</InfoTitle>
      <ProductInfoWrap>{product.info}</ProductInfoWrap>
    </>
  );
};

const FreightIntro = ({ product }) => {
  return (
    <>
      <InfoTitle>運送方式與其他資訊</InfoTitle>
      <InfoItem>
        <InfoItemTitle>運送方式</InfoItemTitle>
        <InfoBlock>{product.delivery === '0' ? '面交' : '郵寄'}</InfoBlock>
      </InfoItem>
      <InfoItem>
        <InfoItemTitle>付款方式</InfoItemTitle>
        <InfoBlock>
          {product.payment_method === '0' ? '貨到付款' : ''}
        </InfoBlock>
      </InfoItem>
      <InfoItem>
        <InfoItemTitle>退款換貨須知</InfoItemTitle>
        <InfoBlock>
          台灣境內交易七天鑑賞期
          台灣境內交易，根據台灣消保法第十九條規範，享有收到商品後隔日起算七天內無條件退換貨的服務，且商品退回運費由賣方承擔。
          請保持商品包裝完整寄回，經賣方確認無誤後，即可申請退款。
        </InfoBlock>
      </InfoItem>
    </>
  );
};

const PurchaseInfoLeftContainer = styled.section`
  width: 50%;
`;

export const PurchaseInfoLeft = ({ product }) => {
  const { loaded, onLoad } = useProduct();
  return (
    <PurchaseInfoLeftContainer>
      <ProductPictureContainer>
        <ProductPicture
          src={product.picture_url}
          style={{ opacity: loaded ? 1 : 0 }}
          onLoad={onLoad}
        />
      </ProductPictureContainer>
      <ProductIntro product={product} />
      <FreightIntro product={product} />
    </PurchaseInfoLeftContainer>
  );
};
