import { useSelector, useDispatch } from 'react-redux';
import {
  getMe,
  selectUser,
  updateUser,
  updatePassword,
  uploadAvatar,
  selectErrorMessage,
  getVendorInfo,
} from '../../redux/slices/userSlice/userSlice';

export default function useUser() {
  const dispatch = useDispatch();
  //const user = useSelector(selectUser);
  const vendorInfo = useSelector(selectVendorInfo);
  const userErrorMessage = useSelector(selectErrorMessage);
  const handleGetVendorInfo = (id) => {
    dispatch(getVendorInfo(id));
  };

  const handleGetMe = () => dispatch(getMe());
  const handleUpdatePassword = (data) =>
    dispatch(updatePassword(data)).then((result) => result);
  const handleUpdateUser = (data) =>
    dispatch(updateUser(data)).then((result) => result);
  const handleUploadAvatar = (data) =>
    dispatch(uploadAvatar(data)).then((result) => result);

  return {
    user,
    handleGetMe,
    handleUpdateUser,
    handleUpdatePassword,
    handleUploadAvatar,
    errorMessage,
  };
}
