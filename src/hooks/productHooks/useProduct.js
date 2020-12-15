import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  setProducts,
  setHasMoreProducts,
  setSort,
  selectVendorInfo,
  selectSort,
  selectProductCount,
  selectProductCategories,
  selectProduct,
  selectProducts,
  selectPage,
  selectCategory,
  selectErrorMessage,
  searchProduct,
  getProduct,
  getProductCategories,
  getProductsFromCategory,
  getProductsFromVendor,
  selectHasMoreProducts,
  setPage,
} from '../../redux/slices/productSlice/productSlice';

function averageTime(count, products) {
  console.log('count:', count, 'products:', products);
  let totalTime = 0;
  for (let i = 0; i < count; i++) {
    totalTime += products[i].delivery_time;
  }
  return Math.ceil(totalTime / count);
}

export default function useProduct() {
  const [loaded, setLoaded] = useState(false);
  const onLoad = () => {
    setLoaded(true);
  };
  const location = useLocation();
  const currentPage = location.pathname;
  const dispatch = useDispatch();
  const vendorInfo = useSelector(selectVendorInfo);
  const productCategories = useSelector(selectProductCategories);
  const product = useSelector(selectProduct);
  const products = useSelector(selectProducts);
  const productCount = useSelector(selectProductCount);
  const category = useSelector(selectCategory);
  const productErrorMessage = useSelector(selectErrorMessage);
  const hasMoreProducts = useSelector(selectHasMoreProducts);
  const averageShippingTime = averageTime(products.length, products);
  let page = useSelector(selectPage);
  const sort = useSelector(selectSort);

  const handleGetProduct = (id) => {
    dispatch(getProduct(id)).then((userId) => {
      dispatch(getProductsFromVendor(userId, page, 4)).then((products) => {
        let tempProducts = products.filter((product) => {
          return product.id !== Number(id);
        });
        if (tempProducts.length > 3) {
          tempProducts.pop();
        }
        return dispatch(setProducts(tempProducts));
      });
    });
  };

  const handleGetProductCategories = () => dispatch(getProductCategories());

  const handleGetSearchProduct = (keyword) => {
    dispatch(searchProduct(keyword, page));
  };

  const handleGetProductFromCategory = (id) => {
    dispatch(getProductsFromCategory(id, page));
  };

  const handleGetProductsFromVendor = (id) => {
    dispatch(getProductsFromVendor(id, page, 10));
  };

  const handleSearchProductMoreButton = (keyword) => {
    dispatch(searchProduct(keyword, ++page, sort));
  };

  const handleVendorProductMoreButton = (id) => {
    dispatch(getProductsFromVendor(id, ++page, 10));
  };

  const handleCategoryProductMoreButton = (id) => {
    dispatch(getProductsFromCategory(id, ++page, sort));
  };

  const handleChangeProductSort = (id, sort) => {
    dispatch(setProducts([]));
    dispatch(setHasMoreProducts(true));
    dispatch(setSort(sort));
    currentPage.includes('/category')
      ? dispatch(getProductsFromCategory(id, page, sort))
      : dispatch(searchProduct(id, page, sort));
  };

  return {
    loaded,
    setLoaded,
    onLoad,
    setProducts,
    vendorInfo,
    hasMoreProducts,
    productCategories,
    averageShippingTime,
    product,
    products,
    category,
    productCount,
    productErrorMessage,
    handleGetProduct,
    handleGetSearchProduct,
    handleSearchProductMoreButton,
    handleVendorProductMoreButton,
    handleCategoryProductMoreButton,
    handleGetProductCategories,
    handleGetProductFromCategory,
    handleGetProductsFromVendor,
    handleChangeProductSort,
  };
}
