import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useUser from '../../hooks/userHooks/useUser';
import { WrapperMask } from '../userSystem';
import { COLOR, FONT, DISTANCE } from '../../constants/style';
import { TextAreaComponent } from '../../components/Input';
import { ActionButton } from '../../components/Button';

const SetAnnouncementContainer = styled.div`
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

const TwoButton = styled.div`
  margin: ${DISTANCE.md} auto;
  display: flex;
  align-items: center;
`;

const ErrorMessage = styled.p`
  color: ${COLOR.text_alert};
  font-size: ${FONT.xss};
  margin-top: 15px;
`;

export default function SetAnnouncementComponent({ setIsSettingAnnouncement }) {
  const { user, handleUpdateAnnouncement } = useUser();
  const [value, setValue] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = () => {
    setSubmitError('');
    handleUpdateAnnouncement(value).then((result) => {
      if (result) setSubmitError('編輯失敗');
      setIsSettingAnnouncement(false);
    });
  };

  useEffect(() => {
    setValue(user.announcement);
  }, []);

  return (
    <WrapperMask>
      <SetAnnouncementContainer>
        <Title>編輯公告</Title>
        <TextAreaComponent
          $size={'lg'}
          rows='5'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {submitError && <ErrorMessage>{submitError}</ErrorMessage>}
        <TwoButton>
          <ActionButton $margin={0} onClick={handleSubmit}>
            送出
          </ActionButton>
          <ActionButton
            $bg={'red'}
            onClick={() => setIsSettingAnnouncement(false)}
          >
            取消
          </ActionButton>
        </TwoButton>
      </SetAnnouncementContainer>
    </WrapperMask>
  );
}
