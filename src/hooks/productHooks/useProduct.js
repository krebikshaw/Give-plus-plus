import { useSelector, useDispatch } from 'react-redux';
import {
  selectProductCategories,
  getProductCategories,
} from '../../redux/slices/productSlice/productSlice';

export default function useProduct() {
  const dispatch = useDispatch();
  const productCategories = useSelector(selectProductCategories);

  const handleGetProductCategories = () => dispatch(getProductCategories());

  return { productCategories, handleGetProductCategories };
}
