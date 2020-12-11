import { useSelector, useDispatch } from 'react-redux';
import {
  selectUsers,
  selectProducts,
  getUnExamineProducts,
} from '../../redux/slices/adminSlice/adminSlice';

export default function useAdmin() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const products = useSelector(selectProducts);

  const handleGetUnExamineProducts = (page) =>
    dispatch(getUnExamineProducts(page)).then((result) => result);

  return { users, products, handleGetUnExamineProducts };
}
