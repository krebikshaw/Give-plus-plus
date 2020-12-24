import { useState } from 'react';
import useUser from '../userHooks/useUser';

export default function useClientForm() {
  const { handleUpdateUser } = useUser();
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [birthdayError, setBirthdayError] = useState('');

  const handleSubmit = (setSuccessMode) => {
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
      if (result) return;
      setSuccessMode(true);
    });
  };
  return {
    nickname,
    email,
    address,
    birthday,
    nicknameError,
    emailError,
    addressError,
    birthdayError,
    setNickname,
    setEmail,
    setAddress,
    setBirthday,
    setNicknameError,
    setEmailError,
    setAddressError,
    setBirthdayError,
    handleSubmit,
  };
}
