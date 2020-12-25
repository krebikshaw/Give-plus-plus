/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  logout,
  selectUserId,
} from '../../redux/slices/generalSlice/generalSlice';

export default function useLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector(selectUserId);
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return {
    userId,
    handleLogout,
  };
}
