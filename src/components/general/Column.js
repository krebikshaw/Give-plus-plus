import styled from 'styled-components';

export const Column = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 50vw;
  min-width: 480px;
`;

export const BackgroundColumn = styled(Column)`
  background: url(${process.env.PUBLIC_URL}/login-bg.jpg) center/cover;
`;