import React, { useEffect } from 'react';
import styled from 'styled-components';
import useUser from '../../hooks/userHooks/useUser';
import { SetQRCode } from '../userSystem/';
import { BirthdaySelector } from '../../components/userSystem';
import { COLOR, FONT, DISTANCE } from '../../constants/style';
import { InputComponent } from '../../components/Input';
import { ActionButton } from '../../components/Button';
import useVendorForm from '../../hooks/userHooks/useVendorForm';

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
  const { user } = useUser();
  const {
    nickname,
    idCardNumber,
    email,
    address,
    nicknameError,
    idCardNumberError,
    emailError,
    addressError,
    birthdayError,
    setNickname,
    setIdCardNumber,
    setEmail,
    setAddress,
    setSocialMediaId,
    setBirthday,
    handleSubmit,
  } = useVendorForm();

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
      <ActionButton
        onClick={() => handleSubmit(setSuccessMode, isAdminStatus)}
        $margin={0}
      >
        送出
      </ActionButton>
    </>
  );
}
