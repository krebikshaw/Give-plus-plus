import React from 'react';
import styled from 'styled-components';
import useSet from '../../hooks/userHooks/useSet';
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
  const {
    oldPassword,
    newPassword,
    confirmPassword,
    submitError,
    shownOldPassword,
    shownNewPassword,
    shownConfirmPassword,
    setOldPassword,
    setNewPassword,
    setConfirmPassword,
    handleSubmitSetPassword,
    handleToggleShownConfirmPassword,
    handleToggleShownNewPassword,
    handleToggleShownOldPassword,
  } = useSet();

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
          <ActionButton
            $margin={0}
            onClick={() =>
              handleSubmitSetPassword(setSuccessMode, setIsSettingPassword)
            }
          >
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
