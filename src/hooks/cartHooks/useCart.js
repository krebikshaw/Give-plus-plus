import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import {
  selectCart,
  selectError,
  selectLoading,

} from "../../redux/slices/cartSlice/cartSlice";
const TOKEN_NAME = "token";
export const setAuthToken = (token) => {
  localStorage.setItem(TOKEN_NAME, token);
};
export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_NAME);
};

export default function useCart() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const carts = useSelector(selectCart);
  const errorMessage = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  
  return { carts, errorMessage, isLoading };
}







