import { useSelector, useDispatch } from "react-redux";
import {
  selectProductCategories,
  selectProducts,
  selectProduct,
  selectErrorMessage,
  getProductCategories,
  getProductsFromVendor,
} from "../../redux/slices/productSlice/productSlice";

export default function useProduct() {
  const dispatch = useDispatch();
  const productCategories = useSelector(selectProductCategories);
  const products = useSelector(selectProducts);
  const handleGetProductCategories = () => dispatch(getProductCategories());
  const handleGetProductsFromVendor = (id) =>
    dispatch(() => getProductsFromVendor(id));
  return {
    productCategories,
    products,
    handleGetProductCategories,
    handleGetProductsFromVendor,
  };
}
