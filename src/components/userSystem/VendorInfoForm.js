import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useUser from '../../hooks/userHooks/useUser';
import { SetQRCode } from '../userSystem/';
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

const InputDescription = styled.p`
  color: ${COLOR.text_1};
  font-size: ${FONT.sm};
  margin: ${DISTANCE.xs} 0;
`;

const ErrorMessage = styled.span`
  color: ${COLOR.text_alert};
  font-size: ${FONT.xss};
  margin: 0 15px;
`;

export default function VendorInfoForm({ setSuccessMode, isAdminStatus }) {
  const { user, handleUpdateUser, handleUpdateUserInfo } = useUser();
  const [nickname, setNickname] = useState('');
  const [idCardNumber, setIdCardNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [socialMediaId, setSocialMediaId] = useState('');
  const [birthday, setBirthday] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [idCardNumberError, setIdCardNumberError] = useState('');
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
      id_card_no: idCardNumber ? idCardNumber : '',
      email: email ? email : '',
      address: address ? address : '',
      birthday: birthday ? birthday : null,
      socialmedia_id: socialMediaId ? socialMediaId : null,
    };
    if (isAdminStatus)
      return handleUpdateUserInfo(user.id, data).then((result) => {
        if (result) return;
        setSuccessMode(true);
      });
    handleUpdateUser(data).then((result) => {
      if (result) return;
      setSuccessMode(true);
    });
  };

  useEffect(() => {
    setNickname(user.nickname ? user.nickname : '');
    setIdCardNumber(user.id_card_no ? user.id_card_no : '');
    setEmail(user.email ? user.email : '');
    setAddress(user.address ? user.address : '');
    setSocialMediaId(user.socialmedia_id ? user.socialmedia_id : '');
  }, [user]);

  return (
    <>
      <FontWrapper action='' novalidate=''>
        <InputName>姓名</InputName>
        <InputComponent
          type='text'
          name='nickname'
          $margin={0}
          maxLength='20'
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        {nicknameError && <ErrorMessage>{nicknameError}</ErrorMessage>}
        <InputName>身分證字號</InputName>
        <InputComponent
          type='text'
          name='idCardNumber'
          $margin={0}
          value={idCardNumber}
          onChange={(e) => setIdCardNumber(e.target.value)}
        />
        {idCardNumberError && <ErrorMessage>{idCardNumberError}</ErrorMessage>}
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
        <InputName>聯繫帳號</InputName>
        <InputDescription>line QR-code</InputDescription>
        <SetQRCode setSocialMediaId={setSocialMediaId} />
      </FontWrapper>
      <ActionButton onClick={handleSubmit} $margin={0}>
        送出
      </ActionButton>
    </>
  );
}
