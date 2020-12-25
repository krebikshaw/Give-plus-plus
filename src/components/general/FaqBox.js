import { useState } from 'react';
import styled from 'styled-components';
import { IconComponent } from '../../components';
import { COLOR, DISTANCE } from '../../constants/style';

const FaqWrapper = styled.div`
  margin: ${DISTANCE.sm} 0;
  padding: ${DISTANCE.xs} 0;
  border-bottom: 1.5px solid ${COLOR.hover};
`;

const Question = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  cursor: pointer;
  :hover {
    color: ${COLOR.hover};
  }
`;

const Answer = styled.div`
  margin-top: ${DISTANCE.xs};
`;

const FaqBox = ({ question, answer }) => {
  const [isShowed, setIsShowed] = useState(false);
  return (
    <FaqWrapper onClick={() => setIsShowed(!isShowed)}>
      <Question>
        {question}
        <IconComponent kind='angle-down' />
      </Question>
      {isShowed ? <Answer>{answer}</Answer> : ''}
    </FaqWrapper>
  );
};

export default FaqBox;
