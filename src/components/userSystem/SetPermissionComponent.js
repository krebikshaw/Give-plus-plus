import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useUser from '../../hooks/userHooks/useUser';
import { COLOR, FONT, DISTANCE, EFFECT } from '../../constants/style';
import { ActionButton } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const SetPermissionContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FontWrapper = styled.form`
  margin-bottom: ${DISTANCE.md} 0;
`;

const OptionComponent = styled.option``;

const InputName = styled.h2`
  color: ${COLOR.black};
  font-size: ${FONT.md};
  margin: ${DISTANCE.sm} 0;
`;

const ErrorMessage = styled.span`
  color: ${COLOR.text_alert};
  font-size: ${FONT.xss};
  margin: 0 15px;
`;

const PermissionContainer = styled.div`
  min-width: max-content;
  margin: 15px 0;
`;

const InputSelector = styled.select`
  height: 30px;
  width: 80px;
  box-shadow: ${EFFECT.shadowInput};
  border-radius: 5px;
  outline: none;
  border: none;
  letter-spacing: 0.1rem;
  line-height: 1.5rem;
  padding: 3px;
`;

const Unit = styled.span`
  color: ${COLOR.text_1};
  font-size: ${FONT.xxs};
  margin: 0 20px 5px 0;
`;

const PermissionSelector = ({ permissionState, setPermissionState }) => {
  return (
    <PermissionContainer>
      <InputSelector
        onChange={(e) => setPermissionState(e.target.value)}
        value={permissionState}
      >
        <OptionComponent>0</OptionComponent>
        <OptionComponent>1</OptionComponent>
      </InputSelector>
    </PermissionContainer>
  );
};

export default function SetPermissionComponent({ setSuccessMode }) {
  const navigate = useNavigate();
  const { user, handleUpdatePermission } = useUser();
  const [permissionState, setPermissionState] = useState(0);
  const [permissionError, setPermissionError] = useState('');

  const handleSubmit = () => {
    setPermissionError('');
    const data = {
      id: user.id,
      status: permissionState,
    };
    handleUpdatePermission(data).then((result) => {
      if (result) return;
      setSuccessMode(true);
      navigate(-1);
    });
  };
  useEffect(() => {
    setPermissionState(user.status);
  }, [user]);

  return (
    <>
      <InputName>變更用戶權限</InputName>
      <Unit>0：正常</Unit>
      <Unit>1：停權</Unit>
      <SetPermissionContainer>
        <FontWrapper action='' novalidate=''>
          <PermissionSelector
            permissionState={permissionState}
            setPermissionState={setPermissionState}
          />
          {permissionError && <ErrorMessage>{permissionError}</ErrorMessage>}
        </FontWrapper>
        <ActionButton onClick={handleSubmit} $bg={'red'}>
          送出
        </ActionButton>
      </SetPermissionContainer>
    </>
  );
}
