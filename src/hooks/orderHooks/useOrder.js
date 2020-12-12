import { useSelector, useDispatch } from 'react-redux';
import {
  selectOrder,
  selectUser,
  selectLoading,
  selectError,
  selectDetailOrder,
} from "../../redux/slices/orderSlice/orderSlice";
const TOKEN_NAME = "token";

export const setAuthToken = (token) => {
  localStorage.setItem(TOKEN_NAME, token);
};
export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_NAME);
};

export default function useOrder() {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrder);
  const detailOrder = useSelector(selectDetailOrder);
  const errorMessage = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  console.log(orders);
  console.log(detailOrder);
  const user = useSelector(selectUser);
  return { orders, user, errorMessage, isLoading, detailOrder };
}
