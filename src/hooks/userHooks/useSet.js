import { useState } from 'react';
import useUser from '../userHooks/useUser';
import { useNavigate } from 'react-router-dom';

export default function useSet() {
  const navigate = useNavigate();
  const {
    user,
    handleUpdateAnnouncement,
    handleUploadAvatar,
    handleUploadBanner,
    handleUpdatePassword,
    handleUpdatePermission,
    handleUploadQRCode,
  } = useUser();
  const [isCheckImage, setIsCheckImage] = useState(false);
  const [uploadEvent, setUploadEvent] = useState(null);
  const [uploadError, setUploadError] = useState('');
  const [isLoadingUpload, setIsLoadingUpload] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [shownOldPassword, setShownOldPassword] = useState(false);
  const [shownNewPassword, setShownNewPassword] = useState(false);
  const [shownConfirmPassword, setShownConfirmPassword] = useState(false);
  const [permissionState, setPermissionState] = useState(0);
  const [permissionError, setPermissionError] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('https://i.imgur.com/uqZxFCm.png');
  const [bannerUrl, setBannerUrl] = useState(
    'https://lh4.googleusercontent.com/sAvtic6WzLRcGC485d2irc6Q36VS9GaiIj2TjL9AkbD1t3RjwacfNkJmmUe9fh9c0WV-ZVKQcw=w1200'
  );
  const [avatarUrl, setAvatarUrl] = useState('https://i.imgur.com/uqZxFCm.png');

  const handleChangeFile = (e) => {
    setUploadEvent(e.target.files[0]);
    const file = e.target.files.item(0);
    const fileReader = new FileReader();
    fileReader.addEventListener('load', (e) => {
      setAvatarUrl(e.target.result);
      setIsCheckImage(true);
    });
    fileReader.readAsDataURL(file);
  };

  const handleSubmitSetAvatar = (setSuccessMode) => {
    setIsLoadingUpload(true);
    setUploadError('');
    handleUploadAvatar(uploadEvent).then((result) => {
      if (result.ok === 0) return setUploadError(result.message);
      setIsLoadingUpload(false);
      setIsCheckImage(false);
      setSuccessMode(true);
    });
  };

  const handleCancelSetAvatar = () => {
    setAvatarUrl(user.avatar_url);
    setIsCheckImage(false);
  };

  const handleSubmitSetAnnouncement = (
    setIsSettingAnnouncement,
    setSubmitError,
    value
  ) => {
    setSubmitError('');
    handleUpdateAnnouncement(value).then((result) => {
      if (result) setSubmitError('編輯失敗');
      setIsSettingAnnouncement(false);
    });
  };

  const handleChangeBannerFile = (e) => {
    setUploadEvent(e.target.files[0]);
    const file = e.target.files.item(0);
    const fileReader = new FileReader();
    fileReader.addEventListener('load', (e) => {
      setBannerUrl(e.target.result);
      setIsCheckImage(true);
    });
    fileReader.readAsDataURL(file);
  };

  const handleSubmitSetBanner = (setSuccessMode) => {
    setIsLoadingUpload(true);
    setUploadError('');
    handleUploadBanner(uploadEvent).then((result) => {
      if (result.ok === 0) return setUploadError(result.message);
      setIsLoadingUpload(false);
      setIsCheckImage(false);
      setSuccessMode(true);
    });
  };

  const handleCancelSetBanner = () => {
    setBannerUrl(user.banner_url);
    setIsCheckImage(false);
  };

  const handleSubmitSetPassword = (setSuccessMode, setIsSettingPassword) => {
    setSubmitError('');
    if (
      !oldPassword ||
      !newPassword ||
      !confirmPassword ||
      !oldPassword.trim() ||
      !newPassword.trim() ||
      !confirmPassword.trim()
    )
      return setSubmitError('請填滿欄位');
    if (newPassword !== confirmPassword) {
      setNewPassword('');
      setConfirmPassword('');
      return setSubmitError('密碼不一致');
    }
    const data = {
      oldPassword,
      newPassword,
      confirmPassword,
    };
    handleUpdatePassword(data).then((result) => {
      if (
        result &&
        result.ok === 0 &&
        result.message === 'Invalid oldPassword'
      ) {
        setOldPassword('');
        return setSubmitError('舊密碼錯誤');
      }
      if (
        result &&
        result.ok === 0 &&
        result.message === 'oldPassword and newPassword cannot be the same'
      ) {
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        return setSubmitError('請勿設定與原先相同的密碼');
      }
      setSuccessMode(true);
      setIsSettingPassword(false);
    });
  };

  const handleSubmitSetPermission = (setSuccessMode) => {
    setPermissionError('');
    const data = {
      id: user.userId,
      status: permissionState,
    };
    handleUpdatePermission(data).then((result) => {
      if (result) return;
      setSuccessMode(true);
      navigate(-1);
    });
  };

  const handleChangeQRCodeFile = (e, setSocialMediaId) => {
    const uploadEvent = e.target.files[0];
    const file = e.target.files.item(0);
    const fileReader = new FileReader();
    fileReader.addEventListener('load', (e) => {
      setQrCodeUrl(e.target.result);
      handleUploadQRCode(uploadEvent).then((result) =>
        setSocialMediaId(result)
      );
    });
    fileReader.readAsDataURL(file);
  };

  const handleToggleShownOldPassword = () =>
    setShownOldPassword(!shownOldPassword);
  const handleToggleShownNewPassword = () =>
    setShownNewPassword(!shownNewPassword);
  const handleToggleShownConfirmPassword = () =>
    setShownConfirmPassword(!shownConfirmPassword);

  return {
    isCheckImage,
    uploadEvent,
    uploadError,
    isLoadingUpload,
    avatarUrl,
    bannerUrl,
    qrCodeUrl,
    oldPassword,
    newPassword,
    confirmPassword,
    submitError,
    shownOldPassword,
    shownNewPassword,
    shownConfirmPassword,
    permissionState,
    permissionError,
    setIsCheckImage,
    setUploadEvent,
    setUploadError,
    setIsLoadingUpload,
    setAvatarUrl,
    handleChangeFile,
    handleSubmitSetAvatar,
    handleCancelSetAvatar,
    handleSubmitSetAnnouncement,
    setBannerUrl,
    handleChangeBannerFile,
    handleSubmitSetBanner,
    handleCancelSetBanner,
    setOldPassword,
    setNewPassword,
    setConfirmPassword,
    setSubmitError,
    setShownOldPassword,
    setShownNewPassword,
    setShownConfirmPassword,
    handleSubmitSetPassword,
    handleToggleShownConfirmPassword,
    handleToggleShownNewPassword,
    handleToggleShownOldPassword,
    setPermissionState,
    handleSubmitSetPermission,
    setQrCodeUrl,
    handleChangeQRCodeFile,
  };
}
