import styled from 'styled-components';
import { COLOR, FONT } from '../../constants/style';
import { ThickNavTwoColumnsPage } from '../../components/Page';
import {
  Column,
  BackgroundColumn,
  SocialMediaButton,
  NavButton,
  AlertFooter,
} from '../../components/general/';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 80px;
  height: 300px;
  width: 100%;
  min-width: 300px;
`;

const Section = styled.div`
  display: flex;
`;

const Description = styled.p`
  margin: 60px 0 40px;
  font-size: ${FONT.md};
  color: ${COLOR.text_2};
`;

const EntrancePage = () => {
  return (
    <>
      <ThickNavTwoColumnsPage>
        <Column>
          <Container>
            <Section>
              <SocialMediaButton $color={'#2766c5'} $kind={'fb-circular'} />
              <SocialMediaButton $color={'#5bb144'} $kind={'line-reverse'} />
              <SocialMediaButton $kind={'google'} />
              <SocialMediaButton $color={'#4996d1'} $kind={'twitter-white'} />
            </Section>

            <Description>或用 Give++ 帳號</Description>

            <Section>
              <NavButton children={'登入'} to="/login" />
              <NavButton children={'註冊'} to="/register" />
            </Section>
          </Container>
        </Column>
        <BackgroundColumn $picture={'entrance-bg'} />
      </ThickNavTwoColumnsPage>
      <AlertFooter />
    </>
  );
};

export default EntrancePage;
