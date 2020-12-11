import styled from 'styled-components';
import { FONT } from '../../constants/style';

const Page = styled.div`
  margin-top: 65px;
  height: fit-content;
  width: 100%;
`;

const Banner = styled.img`
  width: 100%;
`;

const Section = styled.div`
  margin: 20px 10vw;
  border: 1px solid black;
`;

const SectionParagraph = styled.div`
  padding: 20px 10vw;
  color: #31596f;
  line-height: 2.5;
  font-size: ${FONT.md};
`;

const AboutUsPage = () => {
  return (
    <Page>
      <Banner src="/about-us-bg.jpg" alt="about-us-bg" />
      <Section>
        <SectionParagraph>
          <span style={{ fontWeight: 800 }}>
            在消費至上資本主義的遊戲規則中，過度的消費不僅代表著過度的消費，更造成環境的負擔
          </span>
          ，然而富裕不代表一定要將大把鈔票用來買新的東西，我們可以選擇做出改變，一起為環境和社會做出一點努力，快來加入
          Give++ 的行列吧。
        </SectionParagraph>
        <SectionParagraph>
          Everyone has the opportunity to make an action which may change the
          world. Give++ is a fantastic platform for exchanging and selling
          second hand products.
        </SectionParagraph>
      </Section>
    </Page>
  );
};

export default AboutUsPage;
