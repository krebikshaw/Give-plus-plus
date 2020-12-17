import styled from 'styled-components';
import { FONT, COLOR, DISTANCE } from '../../constants/style';

const Title = styled.h1`
  margin-bottom: ${DISTANCE.md};
  font-size: ${(props) => (props.$isLarge ? FONT.lg : FONT.md)};
  font-weight: ${(props) => (props.$isBold ? 800 : 400)};
  color: ${COLOR.text_2};
`;

export default Title;
