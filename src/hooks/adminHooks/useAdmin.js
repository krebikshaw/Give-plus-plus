import { useSelector, useDispatch } from 'react-redux';
import {
  selectUsers,
  selectProducts,
  getUnCheckProducts,
  updateProductStatus,
  getUsers,
  searchUsers,
  getProducts,
  searchProducts,
} from '../../redux/slices/adminSlice/adminSlice';

export default function useAdmin() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const products = useSelector(selectProducts);

  const handleGetUnCheckProducts = (page) =>
    dispatch(getUnCheckProducts(page)).then((result) => result);
  const handleUpdateProductStatus = (id, status) =>
    dispatch(updateProductStatus(id, status)).then((result) => result);
  const handleGetUsers = (params) =>
    dispatch(getUsers(params)).then((result) => result);
  const handleSearchUsers = (keyword) =>
    dispatch(searchUsers(keyword)).then((result) => result);
  const handleGetProducts = (params) =>
    dispatch(getProducts(params)).then((result) => result);
  const handleSearchProducts = (keyword) =>
    dispatch(searchProducts(keyword)).then((result) => result);

  return {
    users,
    products,
    handleGetUnCheckProducts,
    handleUpdateProductStatus,
    handleGetUsers,
    handleSearchUsers,
    handleGetProducts,
    handleSearchProducts,
  };
}
