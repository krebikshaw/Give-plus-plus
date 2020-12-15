import { useEffect } from 'react';
import styled from 'styled-components';
import { DISTANCE } from '../../constants/style';
import { GoalBox, Title } from '../../components/general';
import { Products } from '../../components/productSystem';
import products from '../../fakeProducts';
import Carousel from 'nuka-carousel';

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
  useEffect(() => window.scroll(0, 0), []);
  return (
    <Page>
      <Carousel
        autoplay={true}
        wrapAround={true}
        defaultControlsConfig={{
          nextButtonText: '>',
          prevButtonText: '<',
          pagingDotsStyle: {
            fill: 'white',
            margin: '0 5px',
          },
        }}
      >
        <img src={process.env.PUBLIC_URL + '/homepage-banner1.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/homepage-banner2.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/homepage-banner3.jpg'} alt="" />
      </Carousel>
      <Section>
        <Title $isLarge>最新商品</Title>
        <HomePageProducts>
          <Products products={products} $justify={'flex-start'} />
        </HomePageProducts>
      </Section>
      <GoalBox />
    </Page>
  );
};

export default HomePage;
