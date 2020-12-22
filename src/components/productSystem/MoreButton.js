import styled from 'styled-components';
import { NormalButton } from '../../components/Button';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MoreButton = ({ id, handler }) => {
  return (
    <ButtonContainer>
      <NormalButton onClick={() => handler(id)}>看更多</NormalButton>
    </ButtonContainer>
  );
};
