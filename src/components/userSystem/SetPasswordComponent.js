import React, { useState } from 'react';
import styled from 'styled-components';
import useUser from '../../hooks/userHooks/useUser';
import { WrapperMask } from '../userSystem';
import { COLOR, FONT, DISTANCE } from '../../constants/style';
import { InputComponent } from '../../components/Input';
import IconComponent from '../../components/Icon';
import { ActionButton } from '../../components/Button';

const SetPasswordContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: max-content;
  padding: ${DISTANCE.md} ${DISTANCE.lg};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${COLOR.bg_primary};
`;

const Title = styled.h1`
  color: ${COLOR.black};
  font-size: ${FONT.lg};
  margin-bottom: ${DISTANCE.md};
`;

const InputName = styled.p`
  color: ${COLOR.black};
  font-size: ${FONT.md};
  margin: ${DISTANCE.sm} 0;
`;

const InputItem = styled.div`
  display: flex;
  align-items: center;
`;

const ShownComponent = styled.div``;

const TwoButton = styled.div`
  margin: ${DISTANCE.md} 0;
  display: flex;
  align-items: center;
`;

const ErrorMessage = styled.p`
  color: ${COLOR.text_alert};
  font-size: ${FONT.xss};
  margin-top: 15px;
`;

export default function SetPasswordComponent({
  setSuccessMode,
  setIsSettingPassword,
}) {
  const { handleUpdatePassword, errorMessage } = useUser();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [shownOldPassword, setShownOldPassword] = useState(false);
  const [shownNewPassword, setShownNewPassword] = useState(false);
  const [shownConfirmPassword, setShownConfirmPassword] = useState(false);

  const handleSubmit = () => {
    setSubmitError('');
    if (
      !oldPassword ||
      !newPassword ||
      !confirmPassword ||
      !oldPassword.trim() ||
      !newPassword.trim() ||
      !confirmPassword.trim()
    )
      return setSubmitError('請填滿欄位');
    if (newPassword !== confirmPassword) {
      setNewPassword('');
      setConfirmPassword('');
      return setSubmitError('密碼不一致');
    }
    const data = {
      oldPassword,
      newPassword,
      confirmPassword,
    };
    handleUpdatePassword(data).then((result) => {
      console.log(result);
      if (result.ok === 0) {
        setOldPassword('');
        return setSubmitError('舊密碼錯誤');
      }
      setSuccessMode(true);
      setIsSettingPassword(false);
    });
  };

  return (
    <WrapperMask>
      <SetPasswordContainer>
        <Title>變更密碼</Title>
        <InputName>請輸入舊密碼</InputName>
        <InputItem>
          <InputComponent
            type={shownOldPassword ? 'text' : 'password'}
            name='oldPassword'
            $margin={0}
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <ShownComponent
            onClick={() => setShownOldPassword(!shownOldPassword)}
          >
            {shownOldPassword ? (
              <IconComponent kind={'eye'} />
            ) : (
              <IconComponent kind={'eye-slash'} />
            )}
          </ShownComponent>
        </InputItem>
        <InputName>請輸入新密碼</InputName>
        <InputItem>
          <InputComponent
            type={shownNewPassword ? 'text' : 'password'}
            name='newPassword'
            $margin={0}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <ShownComponent
            onClick={() => setShownNewPassword(!shownNewPassword)}
          >
            {shownNewPassword ? (
              <IconComponent kind={'eye'} />
            ) : (
              <IconComponent kind={'eye-slash'} />
            )}
          </ShownComponent>
        </InputItem>
        <InputName>再輸入一次新密碼</InputName>
        <InputItem>
          <InputComponent
            type={shownConfirmPassword ? 'text' : 'password'}
            name='confirmPassword'
            $margin={0}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <ShownComponent
            onClick={() => setShownConfirmPassword(!shownConfirmPassword)}
          >
            {shownConfirmPassword ? (
              <IconComponent kind={'eye'} />
            ) : (
              <IconComponent kind={'eye-slash'} />
            )}
          </ShownComponent>
        </InputItem>
        {submitError && <ErrorMessage>{submitError}</ErrorMessage>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <TwoButton>
          <ActionButton $margin={0} onClick={handleSubmit}>
            送出
          </ActionButton>
          <ActionButton $bg={'red'} onClick={() => setIsSettingPassword(false)}>
            取消
          </ActionButton>
        </TwoButton>
      </SetPasswordContainer>
    </WrapperMask>
  );
}
