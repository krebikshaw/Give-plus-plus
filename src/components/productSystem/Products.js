import styled from 'styled-components';
import { COLOR, FONT, DISTANCE } from '../../constants/style';
import { MoreButton, ErrorMessage } from '../../components/productSystem/';
import useProduct from '../../hooks/productHooks/useProduct';

const ProductsContainer = styled.div`
  padding: ${(props) => props.$padding || '50px 42px'};
`;

const ProductsWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: ${(props) => props.$justify || 'flex-start'};
`;

const ProductContainer = styled.div`
  position: relative;
  width: ${(props) => props.$width || '190px'};
  height: ${(props) => props.$height || '190px'};
  margin: ${(props) => props.$margin || '0 18px'};
  margin-bottom: 150px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: url(${process.env.PUBLIC_URL}/logo-g.svg) center/cover;
  }
`;

const ProductPicture = styled.img`
  position: relative;
  width: ${(props) => props.$width || '190px'};
  height: ${(props) => props.$height || '190px'};
  transition: opacity 0.2s;
  cursor: pointer;
`;

const ProductName = styled.div`
  margin-top: ${DISTANCE.md};
  text-align: center;
  cursor: pointer;
  a {
    display: block;
    font-size: ${FONT.md};
    color: ${COLOR.black};
  }
`;

const VendorName = styled.div`
  margin-top: ${DISTANCE.sm};
  text-align: center;
  cursor: pointer;
  a {
    display: block;
    font-size: ${FONT.xs};
    color: ${COLOR.text_2};
  }
`;

const ProductPrice = styled.div`
  margin-top: 5px;
  font-size: ${FONT.xs};
  color: ${COLOR.text_2};
  text-align: center;
`;

const Product = ({ product, onLoad, loaded, $width, $height, $margin }) => {
  const formatter = new Intl.NumberFormat('zh-TW', {
    style: 'currency',
    currency: 'NTD',
    minimumFractionDigits: 0,
  });

  return (
    <ProductContainer $width={$width} $height={$height} $margin={$margin}>
      <a href={`/products/${product.id}`}>
        <ProductPicture
          src={product.picture_url}
          style={{ opacity: loaded ? 1 : 0 }}
          onLoad={onLoad}
          $width={$width}
          $height={$height}
        />
      </a>
      <ProductName>
        <a href={`/products/${product.id}`}>{product.name}</a>
      </ProductName>
      <VendorName>
        <a href={`/products/vendor/${product.User.id}`}>
          {product.User.nickname}
        </a>
      </VendorName>
      <ProductPrice>{formatter.format(product.price)}</ProductPrice>
    </ProductContainer>
  );
};

export const Products = ({
  products,
  id,
  hasMoreProducts,
  handler,
  productErrorMessage,
  $width,
  $height,
  $margin,
  $padding,
  $justify,
}) => {
  const { loaded, onLoad } = useProduct();

  return (
    <>
      <ProductsContainer $padding={$padding}>
        <ProductsWrap $justify={$justify}>
          <>
            {products.map((product) => {
              return (
                <Product
                  key={product.id}
                  product={product}
                  onLoad={onLoad}
                  loaded={loaded}
                  $width={$width}
                  $height={$height}
                  $margin={$margin}
                />
              );
            })}
          </>
        </ProductsWrap>
      </ProductsContainer>
      {loaded && !productErrorMessage ? (
        <MoreButton
          id={id}
          products={products}
          hasMoreProducts={hasMoreProducts}
          handler={handler}
        />
      ) : (
        <ErrorMessage productErrorMessage={productErrorMessage} />
      )}
    </>
  );
};
