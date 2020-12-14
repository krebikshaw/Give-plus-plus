import styled from "styled-components";

const BannerContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1200px;
  height: 250px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: url(${process.env.PUBLIC_URL}/logo.svg) center/contain no-repeat;
    object-fit: cover;
  }
`;

const BannerImg = styled.img`
  position: relative;
  width: 100%;
  height: 250px;
  transition: opacity 0.2s;
  object-fit: cover;
`;

export const Banner = ({ onLoad, loaded, banner }) => {
  return (
    <BannerContainer>
      <BannerImg
        src={banner}
        style={{ opacity: loaded ? 1 : 0 }}
        onLoad={onLoad}
      />
    </BannerContainer>
  );
};
