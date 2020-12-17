import { useEffect } from 'react';
import styled from 'styled-components';
import { GoalBox } from '../../components/general';
import { FONT, DISTANCE } from '../../constants/style';

const Page = styled.div`
  margin-top: 65px;
  height: fit-content;
  width: 100%;
`;

const Banner = styled.img`
  width: 100%;
`;

const Section = styled.div`
  margin: ${DISTANCE.sm} 10vw;
  height: auto;
`;

const SectionParagraph = styled.div`
  padding: ${DISTANCE.sm} 10vw;
  color: #31596f;
  line-height: 2.5;
  font-size: ${FONT.md};
`;

const Avatars = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Avatar = styled.div`
  padding: ${DISTANCE.md} ${DISTANCE.lg};
  max-width: 33.333%;
  min-width: 220px;
  transition: all 0.1s linear;
  :hover {
    transition: all 0.3s linear;
    transform: translateY(-3%);
  }
`;

const AvatarPicture = styled.img`
  width: 100%;
`;

const AboutUsPage = () => {
  useEffect(() => window.scroll(0, 0), []);
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

        <Avatars>
          <Avatar>
            <AvatarPicture src="/about-us-avatar1.jpg" alt="avatar1" />
          </Avatar>
          <Avatar>
            <AvatarPicture src="/about-us-avatar2.jpg" alt="avatar1" />
          </Avatar>
          <Avatar>
            <AvatarPicture src="/about-us-avatar3.jpg" alt="avatar1" />
          </Avatar>
        </Avatars>

        <SectionParagraph>
          Everyone has the opportunity to make an action which may change the
          world. Give++ is a fantastic platform for exchanging and selling
          second hand products.
        </SectionParagraph>
      </Section>

      <GoalBox />
    </Page>
  );
};

export default AboutUsPage;
