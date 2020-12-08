import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useUser from '../../hooks/userHooks/useUser';
import { BirthdaySelector } from '../../components/userSystem';
import { COLOR, FONT, DISTANCE } from '../../constants/style';
import { InputComponent } from '../../components/Input';
import { ActionButton } from '../../components/Button';

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
  const { user, handleUpdateUser } = useUser();
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [birthdayError, setBirthdayError] = useState('');

  const handleSubmit = () => {
    setNicknameError('');
    setEmailError('');
    setAddressError('');
    setBirthdayError('');
    const emailReg = /^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/;
    if (nickname && !nickname.trim()) return setNicknameError('姓名格式錯誤');
    if (email && email.search(emailReg) === -1)
      return setEmailError('email 格式錯誤');
    if (address && !address.trim()) return setAddressError('地址格式錯誤');
    const data = {
      nickname: nickname ? nickname : '',
      email: email ? email : '',
      address: address ? address : '',
      birthday: birthday ? birthday : null,
    };
    handleUpdateUser(data).then((result) => {
      if (result) setSuccessMode(true);
    });
  };

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
      <ActionButton onClick={handleSubmit} $margin={0}>
        送出
      </ActionButton>
    </>
  );
}
