import { useSelector, useDispatch } from 'react-redux';
import {
  selectUsers,
  selectProducts,
  getUnCheckProducts,
  updateProductStatus,
} from '../../redux/slices/adminSlice/adminSlice';

export default function useAdmin() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const products = useSelector(selectProducts);

  const handleGetUnCheckProducts = (page) =>
    dispatch(getUnCheckProducts(page)).then((result) => result);
  const handleUpdateProductStatus = (id, status) =>
    dispatch(updateProductStatus(id, status)).then((result) => result);

  return {
    users,
    products,
    handleGetUnCheckProducts,
    handleUpdateProductStatus,
  };
}
