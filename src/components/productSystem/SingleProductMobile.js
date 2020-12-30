import styled from 'styled-components';
import {
  ProductInfo,
  VendorIntro,
  ProductPicture,
  ProductIntro,
  FreightIntro,
} from '../../components/productSystem';

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SingleProductMobile = ({
  product,
  products,
  id,
  vendorInfo,
  productErrorMessage,
}) => {
  return (
    <Container>
      <ProductPicture product={product} />
      <ProductInfo product={product} />
      <ProductIntro product={product} />
      <FreightIntro product={product} />
      <VendorIntro
        products={products}
        id={id}
        vendorInfo={vendorInfo}
        productErrorMessage={productErrorMessage}
      />
    </Container>
  );
};
