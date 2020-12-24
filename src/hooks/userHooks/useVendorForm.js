import { useState } from 'react';
import useUser from '../../hooks/userHooks/useUser';

export default function useVendorForm() {
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

  const handleSubmit = (setSuccessMode, isAdminStatus) => {
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
      return handleUpdateUserInfo(user.userId, data).then((result) => {
        if (result) return;
        setSuccessMode(true);
      });
    handleUpdateUser(data).then((result) => {
      if (result) return;
      setSuccessMode(true);
    });
  };

  return {
    nickname,
    idCardNumber,
    email,
    address,
    socialMediaId,
    birthday,
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
    setNicknameError,
    setIdCardNumberError,
    setEmailError,
    setAddressError,
    setBirthdayError,
    handleSubmit,
  };
}
