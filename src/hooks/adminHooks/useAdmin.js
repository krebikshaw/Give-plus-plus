import { useSelector, useDispatch } from 'react-redux';
import {
  selectUsers,
  selectProducts,
  selectCount,
  selectMails,
  selectMail,
  getUnCheckProducts,
  updateProductStatus,
  getUsers,
  searchUsers,
  getProducts,
  searchProducts,
  getMails,
} from '../../redux/slices/adminSlice/adminSlice';
import { getMailsAPI } from '../../webAPI/adminAPI';

export default function useAdmin() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const products = useSelector(selectProducts);
  const count = useSelector(selectCount);
  const mails = useSelector(selectMails);
  const mail = useSelector(selectMail);

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
  const handleSearchProducts = (params) =>
    dispatch(searchProducts(params)).then((result) => result);
  const handleGetMails = () => dispatch(getMails()).then((result) => result);

  return {
    users,
    products,
    count,
    mail,
    mails,
    handleGetUnCheckProducts,
    handleUpdateProductStatus,
    handleGetUsers,
    handleSearchUsers,
    handleGetProducts,
    handleSearchProducts,
    handleGetMails,
  };
}
