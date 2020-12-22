import styled from 'styled-components';
import { COLOR, FONT } from '../../constants/style';

const ErrorMessageContainer = styled.div`
  margin-top: ${(props) => props.$margin || '0px'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${FONT.lg};
  font-weight: bold;
  color: ${COLOR.hover};
`;

export const ErrorMessage = ({ productErrorMessage, $margin }) => {
  return (
    <>
      {productErrorMessage && (
        <ErrorMessageContainer $margin={$margin}>
          {productErrorMessage}
        </ErrorMessageContainer>
      )}
    </>
  );
};
