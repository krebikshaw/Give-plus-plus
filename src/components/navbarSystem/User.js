import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useUser from '../../hooks/userHooks/useUser';
import IconComponent from '../Icon';
import { COLOR, DISTANCE, FONT } from '../../constants/style';
import { useNavigate } from 'react-router-dom';

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
    top: 1px;
    right: 14px;
    z-index: 7500;
  }
`;

const OptionInner = styled.div`
  padding-top: 9px;
  z-index: 1;
  position: relative;
  width: 150px;
  background: ${COLOR.bg_primary};
`;

const OptionList = styled.ul`
  border: 1px solid #e5e5e6;
  border-radius: 5px;
  padding: 10px 30px 20px 30px;
`;

const OptionItem = styled.li`
  margin: ${DISTANCE.xs} 0;
`;

const OptionName = styled.p`
  color: ${COLOR.black};
  font-size: ${FONT.xs};
  cursor: pointer;
  &:hover {
    color: ${COLOR.btn_primary};
  }
`;

export default function User() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [isVendor, setIsVendor] = useState(false);
  const { handleGetMe } = useUser();

  useEffect(() => {
    handleGetMe().then((result) => {
      if (!result || result.ok === 0) return;
      setIsVendor(result.data.is_vendor);
      setNickname(result.data.nickname);
    });
  }, []);

  return (
    <UserContainer>
      <IconComponent kind={'user-circle'} />
      <OptionWrapper>
        <OptionInner>
          <OptionList>
            {nickname && (
              <OptionItem style={{ color: COLOR.text_1, margin: '15px 0' }}>
                {nickname}
              </OptionItem>
            )}
            <OptionItem>
              <OptionName onClick={() => navigate('/users/me')}>
                編輯個人資料
              </OptionName>
            </OptionItem>
            <OptionItem>
              <OptionName onClick={() => navigate('/orders/client')}>
                購買訂單
              </OptionName>
            </OptionItem>
            {isVendor && (
              <OptionItem>
                <OptionName onClick={() => navigate('/orders/vendor')}>
                  銷售訂單
                </OptionName>
              </OptionItem>
            )}
            {isVendor && (
              <OptionItem>
                <OptionName onClick={() => navigate('/users/backstage')}>
                  賣家後台
                </OptionName>
              </OptionItem>
            )}
          </OptionList>
        </OptionInner>
      </OptionWrapper>
    </UserContainer>
  );
}
