import styled from 'styled-components';
import { COLOR, FONT, DISTANCE } from '../../constants/style';
import { MoreButton, ErrorMessage } from '../../components/productSystem/';
import { Nav } from '../../components/Button';
import useProduct from '../../hooks/productHooks/useProduct';
import { NavLink } from 'react-router-dom';

const ProductsContainer = styled.div`
  padding: ${(props) => props.$padding || '50px 42px'};
`;

const ProductsWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${(props) => props.$justify || 'center'};
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

const Placeholder = styled.div`
  width: ${(props) => props.$width || '190px'};
  margin: ${(props) => props.$margin || '0 20px'};
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
}
  a {
    display: block;
    font-size: ${FONT.md};
    color: ${COLOR.black};
    overflow: hidden;
    white-space: pre;
    text-overflow: ellipsis;
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
    overflow: hidden;
    white-space: pre;
    text-overflow: ellipsis;
  }
`;

const ProductPrice = styled.div`
  margin-top: 5px;
  font-size: ${FONT.xs};
  color: ${COLOR.text_2};
  text-align: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  text-align: right;
  & a {
    position: absolute;
    transform: translate(75%, 11px);
    z-index: 10;
    &:hover {
      transform: translate(75%, 11px);
    }
  }
`;

const Product = ({ product, onLoad, loaded, $width, $height, $margin }) => {
  const formatter = new Intl.NumberFormat('zh-TW', {
    style: 'currency',
    currency: 'NTD',
    minimumFractionDigits: 0,
  });

  return (
    <ProductContainer $width={$width} $height={$height} $margin={$margin}>
      <ButtonContainer>
        <Nav children={'編輯商品'} path={`/products/edit/${product.id}`} />
      </ButtonContainer>
      <NavLink to={`/products/${product.id}`}>
        <ProductPicture
          src={product.picture_url}
          style={{ opacity: loaded ? 1 : 0 }}
          onLoad={onLoad}
          $width={$width}
          $height={$height}
        />
      </NavLink>
      <ProductName>
        <NavLink to={`/products/${product.id}`}>{product.name}</NavLink>
      </ProductName>
      <VendorName>
        <NavLink to={`/products/vendor/${product.User.id}`}>
          {product.User.nickname}
        </NavLink>
      </VendorName>
      <ProductPrice>{formatter.format(product.price)}</ProductPrice>
    </ProductContainer>
  );
};

export default function Products({
  products,
  id,
  hasMoreProducts,
  handler,
  productErrorMessage,
  filter,
  productId,
  $width,
  $height,
  $margin,
  $padding,
  $justify,
}) {
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
          <Placeholder $width={$width} $margin={$margin} />
          <Placeholder $width={$width} $margin={$margin} />
          <Placeholder $width={$width} $margin={$margin} />
          <Placeholder $width={$width} $margin={$margin} />
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
}
