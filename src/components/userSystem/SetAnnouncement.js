import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useUser from '../../hooks/userHooks/useUser';
import useSet from '../../hooks/userHooks/useSet';
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
  justify-content: space-between;
  align-items: center;
`;

const ErrorMessage = styled.p`
  color: ${COLOR.text_alert};
  font-size: ${FONT.xss};
  margin-top: 15px;
`;

export default function SetAnnouncement({ setIsSettingAnnouncement }) {
  const { user } = useUser();
  const { handleSubmitSetAnnouncement } = useSet();
  const [value, setValue] = useState('');
  const [submitError, setSubmitError] = useState('');

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
          <ActionButton
            onClick={() =>
              handleSubmitSetAnnouncement(
                setIsSettingAnnouncement,
                setSubmitError,
                value
              )
            }
          >
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
