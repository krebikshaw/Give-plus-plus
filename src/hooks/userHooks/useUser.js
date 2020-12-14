import { useSelector, useDispatch } from 'react-redux';
import {
  getMe,
  selectUser,
  updateUser,
  updatePassword,
  uploadAvatar,
  uploadQRCode,
  uploadBanner,
  updatePermission,
  selectErrorMessage,
  getUserById,
  updateUserInfo,
  applyForVendor,
} from '../../redux/slices/userSlice/userSlice';

export default function useUser() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const errorMessage = useSelector(selectErrorMessage);

  const handleGetMe = () => dispatch(getMe()).then((result) => result);
  const handleUpdatePassword = (data) =>
    dispatch(updatePassword(data)).then((result) => result);
  const handleUpdateUser = (data) =>
    dispatch(updateUser(data)).then((result) => result);
  const handleUploadAvatar = (data) =>
    dispatch(uploadAvatar(data)).then((result) => result);
  const handleUploadQRCode = (data) =>
    dispatch(uploadQRCode(data)).then((result) => result);
  const handleUploadBanner = (data) =>
    dispatch(uploadBanner(data)).then((result) => result);
  const handleUpdatePermission = (data) =>
    dispatch(updatePermission(data)).then((result) => result);
  const handleGetUserById = (id) =>
    dispatch(getUserById(id)).then((result) => result);
  const handleUpdateUserInfo = (id, data) =>
    dispatch(updateUserInfo(id, data)).then((result) => result);
  const handleApplyForVendor = () =>
    dispatch(applyForVendor()).then((result) => result);

  return {
    user,
    handleGetMe,
    handleUpdateUser,
    handleUpdatePassword,
    handleUploadAvatar,
    handleUploadQRCode,
    handleUploadBanner,
    handleUpdatePermission,
    handleGetUserById,
    handleUpdateUserInfo,
    handleApplyForVendor,
    errorMessage,
  };
}
