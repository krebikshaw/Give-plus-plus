import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ThickNavPage } from '../../components/Page';
import { IconComponent } from '../../components';
import { FONT, COLOR, DISTANCE } from '../../constants/style';
import useFaq from '../../hooks/generalHooks/useFaq';

const Container = styled.div`
  margin: 20vh auto -100px;
  padding: ${DISTANCE.xs};
  max-width: 700px;
  min-width: 300px;
  color: ${COLOR.text_2};
  font-size: ${FONT.sm};
`;

const Title = styled.h1`
  font-size: ${FONT.lg};
  color: ${COLOR.text_2};
  margin-bottom: ${DISTANCE.lg};
`;

const FaqCategoryBox = styled.div`
  margin: ${DISTANCE.lg} 0;
`;

const CategoryTitle = styled.h2`
  font-size: ${FONT.md};
  color: ${COLOR.text_2};
`;

const FaqBox = styled.div`
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

const FaqCategory = ({ categoryTitle, children }) => {
  return (
    <FaqCategoryBox>
      <CategoryTitle>{categoryTitle}</CategoryTitle>
      {children}
    </FaqCategoryBox>
  );
};

const Faq = ({ question, answer }) => {
  return (
    <FaqBox>
      <Question>
        {question}
        <IconComponent kind={'angle-down'} />
      </Question>
      <Answer>{answer}</Answer>
    </FaqBox>
  );
};

const FAQPage = () => {
  const { faqs, handleGetFaqs } = useFaq();
  useEffect(() => {
    handleGetFaqs();
    window.scroll(0, 0);
  }, []);

  return (
    <ThickNavPage>
      <Container>
        <Title>常見問題</Title>
        {faqs.map((category) => (
          <FaqCategory categoryTitle={category.faqCategoryName}>
            {category.data.map((faq) => (
              <Faq question={faq.question} answer={faq.answer} />
            ))}
          </FaqCategory>
        ))}
      </Container>
    </ThickNavPage>
  );
};

export default FAQPage;
