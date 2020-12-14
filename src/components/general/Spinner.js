import styled, { keyframes } from "styled-components";

const rotate = keyframes`
   from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

const SpinnerBorder = styled.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border: 5px solid black;
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 0.75s linear infinite;
`;

const Spinner = () => {
  return (
    <Wrap>
      <SpinnerBorder />
    </Wrap>
  );
};

export default Spinner;
