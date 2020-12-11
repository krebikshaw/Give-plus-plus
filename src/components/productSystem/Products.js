import styled from "styled-components";
import { COLOR, FONT, DISTANCE } from "../../constants/style";

// export const SellerProductContainer = styled.section`

// `;

const ProductsContainer = styled.div`
  display: flex;
  padding: 50px 42px;
`;

const ProductsWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const ProductPicture = styled.div`
  background: url(${(props) => props.picture}) center/cover no-repeat;
  width: 190px;
  height: 190px;
`;

const ProductContainer = styled.div`
  width: 190px;
  margin: 18px;
  margin-bottom: 50px;
`;

const ProductName = styled.div`
  margin-top: ${DISTANCE.md};
  font-size: ${FONT.md};
  color: ${COLOR.black};
  text-align: center;
`;

const VendorName = styled.div`
  margin-top: ${DISTANCE.sm};
  font-size: ${FONT.xs};
  color: ${COLOR.text_2};
  text-align: center;
`;

const ProductPrice = styled.div`
  margin-top: 5px;
  font-size: ${FONT.xs};
  color: ${COLOR.text_2};
  text-align: center;

  &:before {
    content: "NT$ ";
  }
`;

const Product = ({ product }) => {
  return (
    <ProductContainer>
      <ProductPicture picture={product.picture_url} />
      <ProductName>{product.name}</ProductName>
      <VendorName>{product.User.nickname}</VendorName>
      <ProductPrice>{product.price}</ProductPrice>
    </ProductContainer>
  );
};

export const Products = ({ products }) => {
  // const handleClickProduct = (id) => {

  // }
  return (
    <>
      <ProductsContainer>
        <ProductsWrap>
          <>
            {products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </>
        </ProductsWrap>
      </ProductsContainer>
    </>
  );
};
