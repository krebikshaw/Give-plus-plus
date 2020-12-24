import { useState } from 'react';
import useUser from '../userHooks/useUser';

export default function useSet() {
  const { user, handleUpdateAnnouncement, handleUploadAvatar } = useUser();
  const [isCheckImage, setIsCheckImage] = useState(false);
  const [uploadEvent, setUploadEvent] = useState(null);
  const [uploadError, setUploadError] = useState('');
  const [isLoadingUpload, setIsLoadingUpload] = useState(false);
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
  const handleCancelSetAvatar = (setSuccessMode) => {
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

  return {
    handleSubmitSetAnnouncement,
    isCheckImage,
    uploadEvent,
    uploadError,
    isLoadingUpload,
    avatarUrl,
    setIsCheckImage,
    setUploadEvent,
    setUploadError,
    setIsLoadingUpload,
    setAvatarUrl,
    handleChangeFile,
    handleSubmitSetAvatar,
    handleCancelSetAvatar,
  };
}
