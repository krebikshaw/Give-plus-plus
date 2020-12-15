import { useEffect } from 'react';
import styled from 'styled-components';
import { COLOR, FONT, DISTANCE } from '../../constants/style';
import { Modal, Title } from '../../components/general';
import { NormalButton } from '../../components/Button';
import { InputComponent, TextAreaComponent } from '../../components/Input';
import useSendMail from '../../hooks/generalHooks/useSendMail';

const Page = styled.div`
  display: flex;
  margin-top: 65px;
  padding: ${DISTANCE.sm} 100px;
  height: calc(100vh - 65px);
  width: 100%;
  justify-items: center;
`;

const ContactForm = styled.div`
  margin: 0 auto;
  padding: ${DISTANCE.sm};
  width: 500px;
`;

const Description = styled.div`
  margin: ${DISTANCE.xs} 0;
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
  margin: 15px 0;
`;

const Buttons = styled.div`
  display: flex;
`;

const Button = styled(NormalButton)`
  width: 70px;
  margin-right: ${DISTANCE.sm};
`;

const ModalContent = styled.div`
  margin-bottom: ${DISTANCE.sm};
  line-height: 2;
  text-align: center;
  color: #5f6f9b;
  font-size: ${FONT.sm};
`;

const RemindMessage = styled.span`
  margin-left: 5px;
  color: ${COLOR.text_alert};
`;

const ErrorMessage = styled.div`
  margin-top: ${DISTANCE.xs};
  color: ${COLOR.text_alert};
`;

const Loading = styled.div``;

const ContactUsPage = () => {
  useEffect(() => window.scroll(0, 0), []);
  const {
    handleInputChange,
    handleSendMail,
    setName,
    setContent,
    setPhone,
    setEmail,
    goHomePage,
    isNameValid,
    isEmailValid,
    isContentValid,
    isModalShowed,
    errorMessage,
    isUserLoading,
  } = useSendMail();

  return (
    <>
      <Page>
        <ContactForm>
          {isModalShowed && (
            <Modal closeModalMessage={'返回首頁'} closeModal={goHomePage}>
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
            <InputComponent
              $margin={0}
              onChange={handleInputChange(setName)}
            ></InputComponent>
            {isNameValid === false && (
              <RemindMessage>請輸入正確的姓名</RemindMessage>
            )}
          </InputBox>

          <InputBox>
            <InputTitle>信箱</InputTitle>
            <InputComponent
              $margin={0}
              onChange={handleInputChange(setEmail)}
            ></InputComponent>
            {isEmailValid === false && (
              <RemindMessage>請輸入正確的信箱</RemindMessage>
            )}
          </InputBox>

          <InputBox>
            <InputTitle>手機</InputTitle>
            <InputComponent
              $margin={0}
              onChange={handleInputChange(setPhone)}
            ></InputComponent>
          </InputBox>

          <InputBox>
            <InputTitle>內容</InputTitle>
            <TextAreaComponent
              rows={'3'}
              $margin={0}
              onChange={handleInputChange(setContent)}
            ></TextAreaComponent>
            {isContentValid === false && (
              <ErrorMessage>請輸入有效的內容</ErrorMessage>
            )}
          </InputBox>

          <Buttons>
            {isUserLoading ? (
              <Loading>Loading...</Loading>
            ) : (
              <>
                <ErrorMessage>{errorMessage}</ErrorMessage>
                <Button onClick={handleSendMail} $margin={0}>
                  送出
                </Button>
              </>
            )}
            <Button onClick={goHomePage} $margin={0}>
              取消
            </Button>
          </Buttons>
        </ContactForm>
      </Page>
    </>
  );
};

export default ContactUsPage;
