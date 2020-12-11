import styled from "styled-components";
import { NormalButton } from "../../components/Button";
import { COLOR, FONT } from "../../constants/style";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${FONT.lg};
  font-weight: bold;
  color: ${COLOR.text_alert};
`;

export const MoreButton = ({
  id,
  hasMoreProducts,
  handler,
  productErrorMessage,
}) => {
  return (
    <>
      {hasMoreProducts ? (
        <ButtonContainer>
          <NormalButton onClick={() => handler(id)}>看更多</NormalButton>
        </ButtonContainer>
      ) : (
        <></>
      )}
      {productErrorMessage && (
        <ErrorMessage>{productErrorMessage}</ErrorMessage>
      )}
    </>
  );
};
