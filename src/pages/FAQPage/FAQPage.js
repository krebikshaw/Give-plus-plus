import { useEffect } from 'react';
import styled from 'styled-components';
import { ThickNavPage } from '../../components/Page';
import { FaqCategoryBox, FaqBox, Title } from '../../components/general';
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

const FAQPage = () => {
  const { faqs, handleGetFaqs } = useFaq();
  useEffect(() => {
    handleGetFaqs();
    window.scroll(0, 0);
  }, []);

  return (
    <ThickNavPage>
      <Container>
        <Title $isLarge>常見問題</Title>
        {faqs.map((category, index) => (
          <FaqCategoryBox key={index} categoryTitle={category.faqCategoryName}>
            {category.data.map((faq, faqIndex) => (
              <FaqBox
                key={faqIndex}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </FaqCategoryBox>
        ))}
      </Container>
    </ThickNavPage>
  );
};

export default FAQPage;
