import React, { useEffect } from 'react';
import styled from 'styled-components';
import useUser from '../../hooks/userHooks/useUser';
import { BirthdaySelector } from '../../components/userSystem';
import { COLOR, FONT, DISTANCE } from '../../constants/style';
import { InputComponent } from '../../components/Input';
import { ActionButton } from '../../components/Button';
import useClientForm from '../../hooks/userHooks/useClientForm';

const FontWrapper = styled.form`
  margin: ${DISTANCE.md} 0;
`;

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

export default function ClientInfoForm({ setSuccessMode }) {
  const { user } = useUser();
  const {
    nickname,
    email,
    address,
    nicknameError,
    emailError,
    addressError,
    birthdayError,
    setNickname,
    setEmail,
    setAddress,
    setBirthday,
    handleSubmit,
  } = useClientForm();

  useEffect(() => {
    setNickname(user.nickname ? user.nickname : '');
    setEmail(user.email ? user.email : '');
    setAddress(user.address ? user.address : '');
  }, [user]);

  return (
    <>
      <FontWrapper action='' novalidate=''>
        <InputName>姓名</InputName>
        <InputComponent
          type='text'
          name='nickname'
          maxLength='20'
          $margin={0}
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        {nicknameError && <ErrorMessage>{nicknameError}</ErrorMessage>}
        <InputName>email</InputName>
        <InputComponent
          type='email'
          name='email'
          $size={'lg'}
          $margin={0}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
        <InputName>地址</InputName>
        <InputComponent
          type='text'
          name='address'
          $size={'lg'}
          $margin={0}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {addressError && <ErrorMessage>{addressError}</ErrorMessage>}
        <InputName>生日</InputName>
        <BirthdaySelector setBirthday={setBirthday} />
        {birthdayError && <ErrorMessage>{birthdayError}</ErrorMessage>}
      </FontWrapper>
      <ActionButton onClick={() => handleSubmit(setSuccessMode)} $margin={0}>
        送出
      </ActionButton>
    </>
  );
}
