import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  setPage,
  setProducts,
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
  getProducts,
  getProductCategories,
  getProductsFromCategory,
  getProductsFromVendor,
  getUserById,
} from '../../redux/slices/productSlice/productSlice';

function averageTime(count, products) {
  let totalTime = 0;
  for (let i = 0; i < count; i++) {
    totalTime += products[i].delivery_time;
  }
  return Math.ceil(totalTime / count);
}

export default function useProduct() {
  const [isShowContact, setIsShowContact] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname;
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const vendorInfo = useSelector(selectVendorInfo);
  const productCategories = useSelector(selectProductCategories);
  const product = useSelector(selectProduct);
  const products = useSelector(selectProducts);
  const productCount = useSelector(selectProductCount);
  const category = useSelector(selectCategory);
  const productErrorMessage = useSelector(selectErrorMessage);
  const averageShippingTime = averageTime(products.length, products);
  const sort = useSelector(selectSort);

  const handleClick = () => {
    setIsShowContact(true);
  };

  const onLoad = () => {
    setLoaded(true);
  };

  const handleGetProduct = (id, page) => {
    dispatch(setPage(page));
    dispatch(getProduct(id)).then((res) => {
      if (!res.product || Number(res.product.status) !== 1) {
        return navigate('/');
      }
      dispatch(getProductsFromVendor(res.vendorInfo.id, page, 4)).then(
        (products) => {
          let tempProducts = products.filter((product) => {
            return product.id !== Number(id);
          });
          if (tempProducts.length > 3) {
            tempProducts.pop();
          }
          return dispatch(setProducts(tempProducts));
        }
      );
    });
  };

  const handleGetProducts = (page) => {
    dispatch(setPage(page));
    dispatch(getProducts(page));
  };

  const handleGetProductCategories = () => dispatch(getProductCategories());

  const handleGetSearchProduct = (keyword, page) => {
    dispatch(setPage(page));
    dispatch(searchProduct(keyword, page));
  };

  const handleGetProductFromCategory = (id) => {
    dispatch(getProductsFromCategory(id, 1));
  };

  const handleGetProductsFromVendor = (id, page) => {
    dispatch(setPage(page));
    dispatch(getProductsFromVendor(id, page, 10)).then((res) => {
      if (res.message === '非賣家') navigate('/');
    });
  };

  const handleGetProductsMoreButton = () => {
    dispatch(setPage(page + 1));
    dispatch(getProducts(page + 1));
  };

  const handleSearchProductMoreButton = (keyword) => {
    dispatch(setPage(page + 1));
    dispatch(searchProduct(keyword, page + 1, sort));
  };

  const handleVendorProductMoreButton = (id) => {
    dispatch(setPage(page + 1));
    dispatch(getProductsFromVendor(id, page + 1, 10)).then((res) => {
      if (res.message === '非賣家') navigate('/');
    });
  };

  const handleCategoryProductMoreButton = (id) => {
    dispatch(setPage(page + 1));
    dispatch(getProductsFromCategory(id, page + 1, sort));
  };

  const handleChangeProductSort = (id, sort, page) => {
    dispatch(setPage(page));
    dispatch(setProducts([]));
    dispatch(setSort(sort));
    currentPage.includes('/category')
      ? dispatch(getProductsFromCategory(id, page, sort))
      : dispatch(searchProduct(id, page, sort));
  };

  const handleGetUserById = (id) => {
    dispatch(getUserById(id));
  };

  return {
    page,
    loaded,
    isShowContact,
    vendorInfo,
    productCategories,
    averageShippingTime,
    product,
    products,
    category,
    productCount,
    productErrorMessage,

    setPage,
    setProducts,
    setLoaded,
    setIsShowContact,

    onLoad,
    handleClick,
    handleGetProducts,
    handleGetProduct,
    handleGetSearchProduct,
    handleGetProductsMoreButton,
    handleSearchProductMoreButton,
    handleVendorProductMoreButton,
    handleCategoryProductMoreButton,
    handleGetProductCategories,
    handleGetProductFromCategory,
    handleGetProductsFromVendor,
    handleChangeProductSort,
    handleGetUserById,
  };
}
