import Carousel from 'nuka-carousel';

const CarouselBox = () => {
  return (
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
  );
};

export default CarouselBox;
