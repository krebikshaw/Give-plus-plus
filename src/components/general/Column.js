import styled from 'styled-components';

export const Column = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 50vw;
  min-width: 480px;
`;

const Background = styled(Column)`
  background: url(${process.env.PUBLIC_URL}/${(props) => props.$picture}.jpg)
    center/cover;
`;

export const BackgroundColumn = ({ $picture }) => {
  return <Background $picture={$picture} />;
};
