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

const ShownPasswordComponent = styled.div``;

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

export default function SetPassword({ setSuccessMode, setIsSettingPassword }) {
  const { handleUpdatePassword } = useUser();
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
      if (
        result &&
        result.ok === 0 &&
        result.message === 'Invalid oldPassword'
      ) {
        setOldPassword('');
        return setSubmitError('舊密碼錯誤');
      }
      if (
        result &&
        result.ok === 0 &&
        result.message === 'oldPassword and newPassword cannot be the same'
      ) {
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        return setSubmitError('請勿設定與原先相同的密碼');
      }
      setSuccessMode(true);
      setIsSettingPassword(false);
    });
  };
  const handleToggleShownOldPassword = () =>
    setShownOldPassword(!shownOldPassword);
  const handleToggleShownNewPassword = () =>
    setShownNewPassword(!shownNewPassword);
  const handleToggleShownConfirmPassword = () =>
    setShownConfirmPassword(!shownConfirmPassword);

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
          <ShownPasswordComponent onClick={handleToggleShownOldPassword}>
            {shownOldPassword ? (
              <IconComponent kind={'eye'} />
            ) : (
              <IconComponent kind={'eye-slash'} />
            )}
          </ShownPasswordComponent>
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
          <ShownPasswordComponent onClick={handleToggleShownNewPassword}>
            {shownNewPassword ? (
              <IconComponent kind={'eye'} />
            ) : (
              <IconComponent kind={'eye-slash'} />
            )}
          </ShownPasswordComponent>
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
          <ShownPasswordComponent onClick={handleToggleShownConfirmPassword}>
            {shownConfirmPassword ? (
              <IconComponent kind={'eye'} />
            ) : (
              <IconComponent kind={'eye-slash'} />
            )}
          </ShownPasswordComponent>
        </InputItem>
        {submitError && <ErrorMessage>{submitError}</ErrorMessage>}
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
