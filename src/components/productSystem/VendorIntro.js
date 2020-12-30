import styled from 'styled-components';
import { COLOR, MEDIA_QUERY } from '../../constants/style';
import {
  Products,
  InfoTitle,
  InfoItem,
  VendorInfo,
} from '../../components/productSystem';

const VendorTitle = styled(InfoTitle)`
  margin-top: 40px;
`;

const OtherProductWrap = styled(InfoItem)`
  margin-top: 40px;
  padding-bottom: 0;
  border-bottom: none;
  ${MEDIA_QUERY} {
    display: flex;
    justify-content: space-between;
  }
`;

const OtherProductTitle = styled(InfoTitle)`
  margin: 0;
  border-bottom: none;
`;

const MoreLink = styled.a`
  margin: 0 20px;
  color: #007bff;
  display: inline-block;
  &:hover {
    color: ${COLOR.hover};
    text-decoration: underline;
  }
`;

export const VendorIntro = ({
  products,
  id,
  productErrorMessage,
  vendorInfo,
}) => {
  return (
    <>
      <VendorTitle>賣家</VendorTitle>
      <VendorInfo />
      {products.length !== 0 ? (
        <>
          <OtherProductWrap>
            <OtherProductTitle>賣家其他商品</OtherProductTitle>
            <MoreLink href={`/products/vendor/${vendorInfo.id}`}>
              看更多
            </MoreLink>
          </OtherProductWrap>
          <Products
            products={products}
            id={id}
            productErrorMessage={productErrorMessage}
            $padding={'20px 10px'}
            $width={'150px'}
            $height={'150px'}
            $margin={'0 5px'}
            $justify={'space-around'}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
