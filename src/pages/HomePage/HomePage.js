import { useEffect } from 'react';
import styled from 'styled-components';
import { DISTANCE } from '../../constants/style';
import { GoalBox, Title, CarouselBox } from '../../components/general';
import { useDispatch } from 'react-redux';
import { Products } from '../../components/productSystem';
import { MEDIA_QUERY } from '../../constants/style';
import useProduct from '../../hooks/productHooks/useProduct';
import Snowfall from 'react-snowfall';
import {
  setProducts,
  setErrorMessage,
} from '../../redux/slices/productSlice/productSlice';

const Page = styled.div`
  margin-top: 110px;
  height: fit-content;
  width: 100%;
  ${MEDIA_QUERY.md} {
    margin-top: 135px;
  }
  ${MEDIA_QUERY.sm} {
    margin-top: 165px;
  }
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
