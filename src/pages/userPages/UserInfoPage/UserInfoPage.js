import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Navbar, IconComponent } from '../../../components';
import { COLOR, FONT, EFFECT, DISTANCE } from '../../../constants/style';
import { ActionButton } from '../../../components/Button';
import {
  Announcement,
  ClientInfoForm,
  SetPasswordComponent,
} from '../../../components/userSystem';
import { ThickNavPage } from '../../../components/Page';
import useUser from '../../../hooks/userHooks/useUser';
import { useSearchParams } from 'react-router-dom';

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

const WrapperMask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #c7c1c178;
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

const UserInfoPage = () => {
  const [successMode, setSuccessMode] = useState(false);
  const [isSettingPassword, setIsSettingPassword] = useState(false);
  const { handleGetMe, errorMessage } = useUser();

  const handleToggleMode = () => setSuccessMode(false);
  const handleSetPassword = () => setIsSettingPassword(true);

  useEffect(() => {
    handleGetMe();
  }, []);

  useEffect(() => {
    console.log(errorMessage);
  }, [errorMessage]);

  return (
    <>
      <Navbar />
      <ThickNavPage>
        <Wrapper $dark={successMode}>
          <Title>基本資料</Title>
          <Announcement />
          <ClientInfoForm setSuccessMode={setSuccessMode} />
          <Text>重設密碼</Text>
          <ActionButton onClick={handleSetPassword} $margin={0}>
            重設密碼
          </ActionButton>
          {isSettingPassword && <SetPasswordComponent />}
          {successMode && (
            <WrapperMask>
              <SuccessMessage>
                <p>編輯成功</p>
                <ActionButton onClick={handleToggleMode}>確定</ActionButton>
              </SuccessMessage>
            </WrapperMask>
          )}
        </Wrapper>
      </ThickNavPage>
    </>
  );
};

export default UserInfoPage;
