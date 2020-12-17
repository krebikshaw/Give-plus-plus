import styled from 'styled-components';
import { FONT, COLOR, DISTANCE } from '../../constants/style';

const FaqCategoryWrapper = styled.div`
  margin: ${DISTANCE.lg} 0;
`;

const CategoryTitle = styled.h2`
  font-size: ${FONT.md};
  color: ${COLOR.text_2};
`;

const FaqCategoryBox = ({ categoryTitle, children }) => {
  return (
    <FaqCategoryWrapper>
      <CategoryTitle>{categoryTitle}</CategoryTitle>
      {children}
    </FaqCategoryWrapper>
  );
};

export default FaqCategoryBox;
