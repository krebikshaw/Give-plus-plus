import styled from 'styled-components';
import { ProductInfo, VendorIntro } from '../../components/productSystem';
import { MEDIA_QUERY } from '../../constants/style';

const PurchaseInfoRightContainer = styled.section`
  margin-left: 100px;
  width: calc(50% + -100px);

  ${MEDIA_QUERY.lg} {
    width: 100%;
    margin-left: 0;
  }
`;

export const PurchaseInfoRight = ({
  product,
  products,
  id,
  productErrorMessage,
  vendorInfo,
}) => {
  return (
    <PurchaseInfoRightContainer>
      <ProductInfo product={product} />
      <VendorIntro
        products={products}
        id={id}
        vendorInfo={vendorInfo}
        productErrorMessage={productErrorMessage}
      />
    </PurchaseInfoRightContainer>
  );
};
