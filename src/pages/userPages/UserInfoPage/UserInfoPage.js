import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from '../../../components/Button';
import { WrapperMask } from '../../../components/userSystem/';
import { COLOR, FONT, EFFECT, DISTANCE } from '../../../constants/style';
import { ActionButton } from '../../../components/Button';
import {
  Announcement,
  ClientInfoForm,
  SetPassword,
  SetAvatar,
} from '../../../components/userSystem';
import { ThickNavPage } from '../../../components/Page';
import useUser from '../../../hooks/userHooks/useUser';

const Wrapper = styled.div`
  width: 50vw;
  margin: 0 auto;
  padding: 30px 0;
`;

const Title = styled.h1`
  color: ${COLOR.black};
  font-size: ${FONT.lg};
`;

const Text = styled.p`
  color: ${COLOR.black};
  font-size: ${FONT.md};
  margin: ${DISTANCE.lg} 0 ${DISTANCE.sm} 0;
`;

const ErrorText = styled.p`
  color: ${COLOR.text_alert};
  font-size: ${FONT.xss};
  margin-top: 15px;
`;

const SuccessMessage = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 200px;
  min-width: 40vw;
  color: ${COLOR.text_1};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: ${FONT.lg};
  border-radius: 15px;
  background: ${COLOR.light_primary};
  box-shadow: ${EFFECT.shadowDark};
  & p {
    margin: 20px;
  }
`;

const PageBottom = styled.div`
  margin: ${DISTANCE.md} auto 0 auto;
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserInfoPage = () => {
  const navigate = useNavigate();
  const [successMode, setSuccessMode] = useState(false);
  const [isSettingPassword, setIsSettingPassword] = useState(false);
  const { handleGetMe, errorMessage } = useUser();
  const handleSetPassword = () => setIsSettingPassword(true);

  useEffect(() => {
    window.scroll(0, 0);
    handleGetMe().then((result) => {
      if (!result.data) return navigate('/');
      if (result.data.is_vendor)
        return navigate(`/users/vendor/${result.data.userId}`);
    });
  }, []);

  return (
    <ThickNavPage>
      <Wrapper>
        <Title>基本資料</Title>
        <Announcement />
        <ClientInfoForm setSuccessMode={setSuccessMode} />
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        <Text>變更密碼</Text>
        <ActionButton onClick={handleSetPassword} $margin={0}>
          變更密碼
        </ActionButton>
        {isSettingPassword && (
          <SetPassword
            setSuccessMode={setSuccessMode}
            setIsSettingPassword={setIsSettingPassword}
          />
        )}
        <Text>變更頭貼</Text>
        <SetAvatar setSuccessMode={setSuccessMode} />
        <PageBottom>
          <Nav path='/' children='回首頁' />
        </PageBottom>
        {successMode && (
          <WrapperMask>
            <SuccessMessage>
              <p>編輯成功</p>
              <ActionButton onClick={() => setSuccessMode(false)}>
                確定
              </ActionButton>
            </SuccessMessage>
          </WrapperMask>
        )}
      </Wrapper>
    </ThickNavPage>
  );
};

export default UserInfoPage;
