import { useSelector, useDispatch } from "react-redux";
import {
  setProducts,
  setHasMoreProducts,
  setSort,
  selectSort,
  selectProductCount,
  selectProductCategories,
  selectProducts,
  selectPage,
  selectProduct,
  selectCategory,
  selectErrorMessage,
  getProductCategories,
  getProductsFromCategory,
  getProductsFromVendor,
  selectHasMoreProducts,
  setPage,
} from "../../redux/slices/productSlice/productSlice";

function averageTime(count, products) {
  let totalTime = 0;
  for (let i = 0; i < count; i++) {
    totalTime += products[i].delivery_time;
  }
  return Math.ceil(totalTime / count);
}

export default function useProduct() {
  const dispatch = useDispatch();
  const productCategories = useSelector(selectProductCategories);
  const products = useSelector(selectProducts);
  const productCount = useSelector(selectProductCount);
  const category = useSelector(selectCategory);
  const productErrorMessage = useSelector(selectErrorMessage);
  const hasMoreProducts = useSelector(selectHasMoreProducts);
  const averageShippingTime = averageTime(products.length, products);
  let page = useSelector(selectPage);
  const sort = useSelector(selectSort);
  const handleGetProductCategories = () => dispatch(getProductCategories());

  const handleGetProductFromCategory = (id) =>
    dispatch(getProductsFromCategory(id, page));

  const handleGetProductsFromVendor = (id) => {
    dispatch(getProductsFromVendor(id, page));
  };
  const handleClickVendorMoreButton = (id) => {
    dispatch(getProductsFromVendor(id, ++page));
  };
  const handleClickCategoryMoreButton = (id) => {
    dispatch(getProductsFromCategory(id, ++page, sort));
  };

  const handleChangeProductSort = (id, sort) => {
    dispatch(setProducts([]));
    dispatch(setHasMoreProducts(true));
    dispatch(setSort(sort));
    dispatch(getProductsFromCategory(id, page, sort));
  };

  return {
    setProducts,
    hasMoreProducts,
    productCategories,
    averageShippingTime,
    products,
    category,
    productCount,
    productErrorMessage,
    handleClickVendorMoreButton,
    handleClickCategoryMoreButton,
    handleGetProductCategories,
    handleGetProductFromCategory,
    handleGetProductsFromVendor,
    handleChangeProductSort,
  };
}
