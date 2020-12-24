import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useUser from '../../../hooks/userHooks/useUser';
import { useLocation, useNavigate } from 'react-router-dom';
import { WrapperMask } from '../../../components/userSystem/';
import { COLOR, FONT, EFFECT, DISTANCE } from '../../../constants/style';
import { ActionButton } from '../../../components/Button';
import {
  Announcement,
  VendorInfoForm,
  SetPassword,
  SetAvatar,
  SetBanner,
  SetPermission,
} from '../../../components/userSystem';
import { ThickNavPage } from '../../../components/Page';

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

const VendorInfoPage = () => {
  const { handleGetUserById } = useUser();
  const location = useLocation();
  const navigate = useNavigate();
  const [successMode, setSuccessMode] = useState(false);
  const [isAdminStatus, setIsAdminStatus] = useState(false);
  const [isSettingPassword, setIsSettingPassword] = useState(false);
  const { handleGetMe, errorMessage } = useUser();

  const handleSetPassword = () => setIsSettingPassword(true);
  const doAdminStatusInit = (userId) => {
    setIsAdminStatus(true);
    handleGetUserById(userId);
  };
  useEffect(() => {
    window.scroll(0, 0);
    handleGetMe().then((result) => {
      const userId = location.pathname.split('/')[3];
      if (!result.data) return navigate('/');
      if (result.data.is_admin) return doAdminStatusInit(userId);
      if (Number(userId) !== result.data.userId || !result.data.is_vendor)
        return navigate('/');
    });
  }, []);

  return (
    <ThickNavPage>
      <Wrapper>
        <Title>基本資料</Title>
        <Announcement />
        {isAdminStatus && <SetPermission setSuccessMode={setSuccessMode} />}
        <VendorInfoForm
          setSuccessMode={setSuccessMode}
          isAdminStatus={isAdminStatus}
        />
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
        <Text>變更封面</Text>
        <SetBanner setSuccessMode={setSuccessMode} />
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

export default VendorInfoPage;
