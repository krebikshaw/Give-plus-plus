/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  login,
  selectErrorMessage,
  selectIsUserLoading,
  setErrorMessage,
} from '../../redux/slices/generalSlice/generalSlice';

export default function useRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordShowed, setIsPasswordShowed] = useState(false);
  const errorMessage = useSelector(selectErrorMessage);
  const isUserLoading = useSelector(selectIsUserLoading);

  const togglePassword = () =>
    setIsPasswordShowed(isPasswordShowed ? false : true);

  const handleInputChange = (setValue) => (e) => setValue(e.target.value);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ username, password })).then((userId) => {
      if (userId) {
        navigate('/');
      } else {
        dispatch(setErrorMessage('使用者帳號或密碼錯誤'));
      }
    });
  };

  return {
    isPasswordShowed,
    errorMessage,
    isUserLoading,
    setErrorMessage,
    handleInputChange,
    setUsername,
    setPassword,
    togglePassword,
    handleLogin,
  };
}
