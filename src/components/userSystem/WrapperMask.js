import styled from 'styled-components';
import { COLOR } from '../../constants/style';

const WrapperMask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${COLOR.bg_mask};
  z-index: 15;
`;

export default WrapperMask;
