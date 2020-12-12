import { useState } from 'react';
import styled from 'styled-components';
import { COLOR, FONT } from '../../constants/style';
import { Modal } from '../../components/general';
import { InputComponent, TextAreaComponent } from '../../components/Input';
import { NormalButton } from '../../components/Button';

const Page = styled.div`
  display: flex;
  margin-top: 65px;
  padding: 20px 100px;
  height: calc(100vh - 65px);
  width: 100%;
  justify-items: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: ${COLOR.text_2};
  font-size: ${FONT.md};
`;

const ContactForm = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: 500px;
`;

const Description = styled.div`
  margin: 10px 0;
  color: ${COLOR.text_2};
  font-size: ${FONT.md};
`;

const InputTitle = styled.h2`
  margin-bottom: 5px;
  color: ${COLOR.text_2};
  font-size: ${FONT.sm};
  font-weight: 400;
`;

const Link = styled.a`
  display: inline;
  color: ${COLOR.text_2};
  text-decoration: none;
`;

const InputBox = styled.div`
  margin: 20px 0;
`;

const Buttons = styled.div`
  display: flex;
`;

const Button = styled(NormalButton)`
  width: 70px;
  margin-right: 20px;
`;

const ModalContent = styled.div`
  margin-bottom: 20px;
  line-height: 2;
  text-align: center;
  color: #5f6f9b;
  font-size: ${FONT.sm};
`;

const ContactUsPage = () => {
  const [isModalShowed, setIsModalShowed] = useState(false);
  const closeModal = () => setIsModalShowed(false);
  const showModal = () => setIsModalShowed(true);
  return (
    <>
      <Page>
        <ContactForm>
          {isModalShowed && (
            <Modal closeModalMessage={'返回首頁'} closeModal={closeModal}>
              <ModalContent>
                訊息成功送出！我們將盡快回覆您，謝謝！
              </ModalContent>
            </Modal>
          )}
          <Title>聯絡我們</Title>
          <Description>
            <Link href="tel:0912345678">Tel: 0912-345-678</Link> |{' '}
            <Link href="mailto:info@my-domain.com">info@giveplusplus.com</Link>
          </Description>
          <InputBox>
            <InputTitle>姓名</InputTitle>
            <InputComponent $margin={0}></InputComponent>
          </InputBox>
          <InputBox>
            <InputTitle>信箱</InputTitle>
            <InputComponent $margin={0}></InputComponent>
          </InputBox>
          <InputBox>
            <InputTitle>內容</InputTitle>
            <TextAreaComponent rows={'3'} $margin={0}></TextAreaComponent>
          </InputBox>
          <Buttons>
            <Button onClick={showModal} $margin={0}>
              送出
            </Button>
            <Button $margin={0}>取消</Button>
          </Buttons>
        </ContactForm>
      </Page>
    </>
  );
};

export default ContactUsPage;
