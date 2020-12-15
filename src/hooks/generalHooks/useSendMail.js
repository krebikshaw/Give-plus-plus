/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  postMail,
  selectErrorMessage,
  selectIsUserLoading,
  setErrorMessage,
} from '../../redux/slices/generalSlice/generalSlice';

export default function useSendMail() {
  let hasError = false;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isContentValid, setIsContentValid] = useState(true);
  const [isModalShowed, setIsModalShowed] = useState(false);
  const [isClicked, setIsClick] = useState(false);
  const errorMessage = useSelector(selectErrorMessage);
  const isUserLoading = useSelector(selectIsUserLoading);

  const handleInputChange = (setValue) => (e) => setValue(e.target.value);

  const checkDataValidity = (data) => {
    const { name, email, content } = data;
    const regexForEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!name && name.trim() === '') {
      setIsNameValid(false);
      hasError = true;
    } else {
      setIsNameValid(true);
    }
    if (content.trim() === '') {
      setIsContentValid(false);
      hasError = true;
    } else {
      setIsContentValid(true);
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
      checkDataValidity({ name, email, content });
    }
  }, [name, email, content]);

  const handleSendMail = () => {
    checkDataValidity({ name, email, content });
    setIsClick(true);
    if (!hasError) {
      dispatch(postMail({ name, email, phone, content })).then((res) => {
        if (res.ok === 1) {
          setIsModalShowed(() => true);
        } else {
          dispatch(setErrorMessage('發生錯誤，請重新送出，謝謝'));
        }
      });
    }
  };

  const goHomePage = () => {
    setIsModalShowed(false);
    window.scroll(0, 0);
    navigate('/');
  };

  return {
    handleInputChange,
    handleSendMail,
    setName,
    setContent,
    setPhone,
    setEmail,
    goHomePage,
    isNameValid,
    isEmailValid,
    isContentValid,
    isModalShowed,
    errorMessage,
    isUserLoading,
    setErrorMessage,
  };
}
