import styled from 'styled-components';
import { COLOR } from '../../constants/style';
import {
  Products,
  InfoTitle,
  InfoItem,
  VendorInfo,
} from '../../components/productSystem';

const OtherProductWrap = styled(InfoItem)`
  padding-bottom: 0;
  border-bottom: none;
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
  hasMoreProducts,
  handler,
  productErrorMessage,
  vendorInfo,
}) => {
  return (
    <>
      <InfoTitle>賣家</InfoTitle>
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
            hasMoreProducts={hasMoreProducts}
            handler={handler}
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
