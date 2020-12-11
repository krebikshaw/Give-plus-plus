import styled from "styled-components";

export const Banner = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 250px;
  background: url(${(props) => props.banner}) center center/cover no-repeat;
`;
