import styled from 'styled-components';
import { COLOR } from '../../constants/style';

export const JoinButton = styled.button`
  margin: 10px 0 40px;
  border-radius: 25px;
  padding: 12px 0;
  border: 1px solid ${COLOR.text_2};
  width: 70%;
  text-align: center;
  color: ${COLOR.text_2};
  &:hover {
    border-color: ${COLOR.hover};
    color: ${COLOR.hover};
    transform: scale(1.05);
  }
`;

export default JoinButton;