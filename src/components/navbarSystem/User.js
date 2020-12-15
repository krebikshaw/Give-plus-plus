import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useUser from '../../hooks/userHooks/useUser';
import IconComponent from '../Icon';
import { COLOR, EFFECT } from '../../constants/style';

const UserContainer = styled.div`
  position: relative;
`;

const OptionWrapper = styled.div`
  z-index: 1;
  display: block;
  visibility: visible;
  opacity: 1;
  transition: visibility 0s, opacity 0.2s linear;
  &::before {
    content: '';
    width: 0;
    height: 0;
    border-color: transparent transparent #e5e5e6;
    border-style: solid;
    border-width: 0 7px 10px;
    position: absolute;
    top: 0;
    right: 23px;
    z-index: 7000;
    position: absolute;
    top: 36px;
    right: 0;
    color: #202026;
  }
`;

const OptionList = styled.ul`
  position: absolute;
  background: ${COLOR.bg_primary};
  box-shadow: ${EFFECT.shadowInput};
  padding: 10px;
  transform: translate(-30px, 5px);
  z-index: 1;
`;

const OptionItem = styled.li``;

export default function User() {
  const [nickname, setNickname] = useState('');
  const { handleGetMe } = useUser();

  useEffect(() => {
    handleGetMe().then((result) => {
      if (!result || result.ok === 0) return;
      setNickname(result.data.nickname);
    });
  }, []);

  return (
    <UserContainer>
      <IconComponent kind={'user-circle'} />
      <OptionWrapper>
        <OptionList>
          {nickname && <OptionItem>{nickname}</OptionItem>}
          <OptionItem>2</OptionItem>
        </OptionList>
      </OptionWrapper>
    </UserContainer>
  );
}
