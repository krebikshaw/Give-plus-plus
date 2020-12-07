import { useSelector, useDispatch } from 'react-redux';
import {
  getMe,
  selectUser,
  updateUser,
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
  const handleUpdateUser = (data) =>
    dispatch(updateUser(data)).then((result) => result);
  return { user, handleGetMe, handleUpdateUser, errorMessage };
}
