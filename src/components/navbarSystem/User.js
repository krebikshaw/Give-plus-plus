import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useUser from '../../hooks/userHooks/useUser';
import IconComponent from '../Icon';
import { COLOR, EFFECT } from '../../constants/style';

const UserContainer = styled.div`
  position: relative;
  &:hover {
    & div {
      opacity: 1;
    }
  }
`;

const OptionWrapper = styled.div`
  z-index: 1;
  display: block;

  opacity: 0;
  transition: visibility 0s, opacity 0.2s linear;
  position: absolute;
  top: 23px;
  right: 0;
  &::before {
    content: '';
    width: 0;
    height: 0;
    border-color: transparent transparent #e5e5e6;
    border-style: solid;
    border-width: 0 7px 10px;
    position: absolute;
    top: 0;
    right: 13px;
    z-index: 7000;
  }
  &::after {
    content: '';
    width: 0;
    height: 0;
    border-color: transparent transparent #fff;
    border-style: solid;
    border-width: 0 6px 9px;
    position: absolute;
    top: 1px;
    right: 14px;
    z-index: 7500;
  }
`;

const OptionInner = styled.div`
  padding-top: 9px;
  z-index: 1;
  position: relative;
  width: 100px;
  background: ${COLOR.bg_primary};
`;

const OptionList = styled.ul`
  border: 1px solid #e5e5e6;
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
        <OptionInner>
          <OptionList>
            {nickname && <OptionItem>{nickname}</OptionItem>}
            <OptionItem>2</OptionItem>
          </OptionList>
        </OptionInner>
      </OptionWrapper>
    </UserContainer>
  );
}
