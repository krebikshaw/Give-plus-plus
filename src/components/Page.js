import styled from 'styled-components';
import { MEDIA_QUERY } from '../constants/style';

export const StandardNavPage = styled.div`
  margin: 110px 150px;
  min-height: 50vh;
  ${MEDIA_QUERY.md} {
    margin: 0 auto;
    padding: 30px;
  }
`;

export const ThickNavPage = styled.div`
  margin: 65px 150px 110px 150px;
  min-height: 50vh;
`;

export const ThickNavTwoColumnsPage = styled.div`
  display: flex;
  margin-top: 65px;
  height: calc(100vh - 95px);
  width: 100%;
`;
