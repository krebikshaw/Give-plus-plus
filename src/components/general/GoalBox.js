import styled from 'styled-components';
import { FONT, COLOR, DISTANCE } from '../../constants/style';

const GoalSection = styled.div`
  margin: ${DISTANCE.md} 0;
  padding: ${DISTANCE.lg} 0;
  background: ${COLOR.bg_secondary};
  display: flex;
  justify-content: center;
`;

const Goal = styled.div`
  padding: 0 ${DISTANCE.md};
  text-align-center;
`;

const GoalTitle = styled.h2`
  margin-bottom: ${DISTANCE.md};
  font-size: ${FONT.lg};
  font-weight: 400;
  color: ${COLOR.text_2};
`;

const GoalPicture = styled.img`
  display: block;
  margin: 0 auto;
`;

const GoalBox = () => {
  return (
    <GoalSection>
      <Goal>
        <GoalTitle>安心消費有保障</GoalTitle>
        <GoalPicture
          src={process.env.PUBLIC_URL + '/about-us-security.png'}
          alt="安心消費有保障"
        />
      </Goal>
      <Goal>
        <GoalTitle>最簡便的二手平台</GoalTitle>
        <GoalPicture
          src={process.env.PUBLIC_URL + '/about-us-heart.png'}
          alt="最簡便的二手平台"
        />
      </Goal>
    </GoalSection>
  );
};

export default GoalBox;
