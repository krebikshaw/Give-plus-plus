import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import {
  selectCart,
  selectError,
  selectLoading,
  deleteCartItemsBySeller,
  deleteCartItem,
  selectMask,
  setMask,
} from "../../redux/slices/cartSlice/cartSlice";
const TOKEN_NAME = "token";


export default function useCart() {
  const dispatch = useDispatch();

  const carts = useSelector(selectCart);
  const errorMessage = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const mask = useSelector(selectMask);
  const handleDelete = (id) => {
    dispatch(deleteCartItem(id));
    window.location.reload();
  };
  const handleDeleteSeller = (id) => {
    dispatch(deleteCartItemsBySeller(id));
    window.location.reload();
  };

  
  return {
    mask,
    carts,
    errorMessage,
    isLoading,
    handleDelete,
    handleDeleteSeller,
  };
}







