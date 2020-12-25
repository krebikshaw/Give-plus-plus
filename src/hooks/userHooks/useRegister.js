/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  register,
  selectErrorMessage,
  selectIsUserLoading,
  setErrorMessage,
} from '../../redux/slices/generalSlice/generalSlice';
export default function useRegister() {
  let hasError = false;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordShowed, setIsPasswordShowed] = useState(false);
  const [isClicked, setIsClick] = useState(false);
  const errorMessage = useSelector(selectErrorMessage);
  const isUserLoading = useSelector(selectIsUserLoading);

  const togglePassword = () =>
    setIsPasswordShowed(isPasswordShowed ? false : true);

  const handleInputChange = (setValue) => (e) => setValue(e.target.value);

  const checkDataValidity = (data) => {
    const { username, password, email } = data;
    const regexForUsername = /^([a-zA-Z0-9]{6,})$/;
    const regexForPassword = /^([a-zA-Z0-9]{6,})$/;
    const regexForEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!regexForUsername.test(username)) {
      setIsUsernameValid(false);
      hasError = true;
    } else {
      setIsUsernameValid(true);
    }
    if (!regexForPassword.test(password)) {
      setIsPasswordValid(false);
      hasError = true;
    } else {
      setIsPasswordValid(true);
    }
    if (!regexForEmail.test(email)) {
      setIsEmailValid(false);
      hasError = true;
    } else {
      setIsEmailValid(true);
    }
  };

  useEffect(() => {
    if (isClicked === true) {
      checkDataValidity({ username, password, email });
    }
  }, [username, password, email]);

  const handleRegister = (e) => {
    e.preventDefault();
    checkDataValidity({ username, password, email });
    setIsClick(true);
    if (!hasError) {
      dispatch(register({ username, password, email })).then((userId) => {
        if (userId) {
          navigate('/');
        } else {
          dispatch(setErrorMessage('使用者帳號重複，請使用別的帳號'));
        }
      });
    }
  };

  return {
    setErrorMessage,
    isPasswordShowed,
    isUsernameValid,
    isPasswordValid,
    isEmailValid,
    errorMessage,
    isUserLoading,
    handleInputChange,
    handleRegister,
    setUsername,
    setPassword,
    setEmail,
    togglePassword,
  };
}
