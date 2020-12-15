import styled from 'styled-components';
import { COLOR, FONT } from '../../constants/style';

const ErrorMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${FONT.lg};
  font-weight: bold;
  color: ${COLOR.hover};
`;

export const ErrorMessage = ({ productErrorMessage }) => {
  return (
    <>
      {productErrorMessage && (
        <ErrorMessageContainer>{productErrorMessage}</ErrorMessageContainer>
      )}
    </>
  );
};
