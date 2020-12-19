import { useEffect } from 'react';
import styled from 'styled-components';
import { DISTANCE } from '../../constants/style';
import { GoalBox, Title, CarouselBox } from '../../components/general';
import { useDispatch } from 'react-redux';
import { Products } from '../../components/productSystem';
import useProduct from '../../hooks/productHooks/useProduct';
import Snowfall from 'react-snowfall';
import {
  setProducts,
  setHasMoreProducts,
  setErrorMessage,
} from '../../redux/slices/productSlice/productSlice';

const Page = styled.div`
  margin-top: 110px;
  height: fit-content;
  width: 100%;
`;

const Section = styled.div`
  margin: ${DISTANCE.md} 10vw;
  padding: 20px 0;
  height: auto;
`;

const HomePageProducts = styled.div`
  margin: -30px 0;
`;

const HomePage = () => {
  const dispatch = useDispatch();
  const {
    products,
    hasMoreProducts,
    productErrorMessage,
    handleGetProducts,
    handleGetProductsMoreButton,
  } = useProduct();

  useEffect(() => {
    window.scroll(0, 0);
    handleGetProducts(1);
    return () => {
      dispatch(setProducts([]));
      dispatch(setErrorMessage(null));
      dispatch(setHasMoreProducts(true));
    };
  }, [dispatch]);

  return (
    <Page>
      <CarouselBox />
      <Snowfall color='#e8f2f7' />
      <Section>
        <Title $isLarge>最新商品</Title>
        <HomePageProducts>
          <Products
            products={products}
            hasMoreProducts={hasMoreProducts}
            handler={handleGetProductsMoreButton}
            productErrorMessage={productErrorMessage}
          />
        </HomePageProducts>
      </Section>
      <GoalBox />
    </Page>
  );
};

export default HomePage;
