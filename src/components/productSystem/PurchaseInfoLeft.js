import { COLOR, FONT, DISTANCE } from "../../constants/style";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import useProduct from "../../hooks/productHooks/useProduct";

const ProductPictureContainer = styled.div`
  position: relative;
  margin-bottom: 65px;
  width: 600px;
  height: 400px;

  &:before {
    content: "";
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
  color: ${COLOR.black};
  white-space: pre-line;
  word-break: break-all;
`;

const ProductInfoWrap = styled(InfoBlock)`
  height: 180px;
  font-weight: normal;
  color: ${COLOR.text_2};
`;

const Return = styled(NavLink)`
  color: #007bff;
  display: inline-block;
  &:hover {
    color: ${COLOR.hover};
    text-decoration: underline;
  }
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
        <InfoBlock>{product.delivery === "0" ? "面交" : "郵寄"}</InfoBlock>
      </InfoItem>
      <InfoItem>
        <InfoItemTitle>付款方式</InfoItemTitle>
        <InfoBlock>
          {product.payment_method === "0" ? "貨到付款" : ""}
        </InfoBlock>
      </InfoItem>
      <InfoItem>
        <InfoItemTitle>退款換貨須知</InfoItemTitle>
        <Return to='#'>點我了解設計館的退款換貨須知</Return>
      </InfoItem>
    </>
  );
};

const PurchaseInfoLeftContainer = styled.section``;

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
