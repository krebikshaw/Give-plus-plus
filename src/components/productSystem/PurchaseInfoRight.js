import styled from "styled-components";
import { ProductInfo, VendorIntro } from "../../components/productSystem";

const PurchaseInfoRightContainer = styled.section`
  margin-left: 100px;
`;

export const PurchaseInfoRight = ({
  product,
  products,
  id,
  productId,
  hasMoreProducts,
  handler,
  productErrorMessage,
  vendorInfo,
}) => {
  return (
    <PurchaseInfoRightContainer>
      <ProductInfo product={product} />
      <VendorIntro
        product={product}
        products={products}
        id={id}
        productId={productId}
        vendorInfo={vendorInfo}
        hasMoreProducts={hasMoreProducts}
        handler={handler}
        productErrorMessage={productErrorMessage}
      />
    </PurchaseInfoRightContainer>
  );
};
