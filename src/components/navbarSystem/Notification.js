import React from 'react';
import styled from 'styled-components';
import IconComponent from '../Icon';
import { COLOR, DISTANCE, FONT } from '../../constants/style';

const UserContainer = styled.div`
  position: relative;
  &:hover {
    & div {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const OptionWrapper = styled.div`
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.2s linear;
  position: absolute;
  top: 30px;
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
    top: 3px;
    right: 14px;
    z-index: 7500;
  }
`;

const OptionInner = styled.div`
  padding-top: 9px;
  z-index: 1;
  position: relative;
  width: 110px;
  background: ${COLOR.bg_primary};
`;

const OptionList = styled.ul`
  border: 1px solid #e5e5e6;
  border-radius: 5px;
  padding: 5px 15px 10px 15px;
  display: flex;
  justify-content: center;
`;

const OptionItem = styled.li`
  margin: ${DISTANCE.xs} 0;
`;

const OptionName = styled.p`
  color: ${COLOR.black};
  font-size: ${FONT.xs};
  cursor: pointer;
`;

export default function Notification() {
  return (
    <UserContainer>
      <IconComponent kind={'bell'} />
      <OptionWrapper>
        <OptionInner>
          <OptionList>
            <OptionItem>
              <OptionName>暫無新通知</OptionName>
            </OptionItem>
          </OptionList>
        </OptionInner>
      </OptionWrapper>
    </UserContainer>
  );
}
