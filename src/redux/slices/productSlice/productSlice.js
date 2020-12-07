import { createSlice } from "@reduxjs/toolkit";
import {
  getProductsAPI,
  getProductCategoriesAPI,
  getProductsFromCategoryAPI,
  getProductsFromVendorAPI,
  searchProductAPI,
  getProductAPI,
  postProductAPI,
  updateProductAPI,
  deleteProductAPI,
} from "../../../webAPI/productAPI";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: [],
    categories: [],
    isLoading: false,
    errorMessage: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  setProducts,
  setProduct,
  setCategories,
  setErrorMessage,
} = productSlice.actions;

export const getProducts = () => (dispatch) => {
  getProductsAPI().then((res) => {
    if (res.ok === 0) {
      return dispatch(setErrorMessage(res ? res.message : "something wrong"));
    }
    dispatch(setProducts(res.data));
  });
};

export const getProduct = (id) => (dispatch) => {
  getProductAPI(id).then((res) => {
    if (res.ok === 0) {
      return dispatch(setErrorMessage(res ? res.message : "something wrong"));
    }
    dispatch(setProduct(res.data));
  });
};

export const getProductsFromCategory = (id) => (dispatch) => {
  getProductsFromCategoryAPI(id).then((res) => {
    if (res.ok === 0) {
      return dispatch(setErrorMessage(res ? res.message : "something wrong"));
    }
    dispatch(setProduct(res.data));
  });
};

export const getProductsFromVendor = (id) => (dispatch) => {
  getProductsFromVendorAPI(id).then((res) => {
    if (res.ok === 0) {
      return dispatch(setErrorMessage(res ? res.message : "something wrong"));
    }
    dispatch(setProducts(res.data));
  });
};

export const searchProduct = (keyword) => (dispatch) => {
  searchProductAPI(keyword).then((res) => {
    if (res.ok === 0) {
      return dispatch(setErrorMessage(res ? res.message : "something wrong"));
    }
    dispatch(setProducts(res.data));
  });
};

export const getProductCategories = () => (dispatch) => {
  getProductCategoriesAPI().then((res) => {
    if (!res || res.ok === 0)
      return dispatch(setErrorMessage(res ? res.message : "something wrong"));
    dispatch(setCategories(res.data));
  });
};

export const postProduct = ({
  ProductCategoryId,
  name,
  picture_url,
  info,
  price,
  quantity,
  delivery, // 出貨方式  0:面交、1:郵寄
  delivery_location, // 出貨地點的欄位
  delivery_time, // 備貨時間的欄位
  payment_method, // 付款方式 0:貨到付款
  remark, // 備註
}) => (dispatch) => {
  return postProductAPI({
    ProductCategoryId,
    name,
    picture_url,
    info,
    price,
    quantity,
    delivery, // 出貨方式  0:面交、1:郵寄
    delivery_location, // 出貨地點的欄位
    delivery_time, // 備貨時間的欄位
    payment_method, // 付款方式 0:貨到付款
    remark, // 備註
  }).then((res) => {
    if (res.ok === 0) {
      return dispatch(setErrorMessage(res ? res.message : "something wrong"));
    }
    return res.message;
  });
};

export const updateProduct = ({
  ProductCategoryId,
  name,
  picture_url,
  info,
  price,
  quantity,
  delivery, // 出貨方式  0:面交、1:郵寄
  delivery_location, // 出貨地點的欄位
  delivery_time, // 備貨時間的欄位
  payment_method, // 付款方式 0:貨到付款
  remark, // 備註
}) => (dispatch) => {
  return updateProductAPI({
    ProductCategoryId,
    name,
    picture_url,
    info,
    price,
    quantity,
    delivery, // 出貨方式  0:面交、1:郵寄
    delivery_location, // 出貨地點的欄位
    delivery_time, // 備貨時間的欄位
    payment_method, // 付款方式 0:貨到付款
    remark, // 備註
  }).then((res) => {
    if (res.ok === 0) {
      return dispatch(setErrorMessage(res ? res.message : "something wrong"));
    }
    return res.message;
  });
};

export const deleteProduct = (id) => (dispatch) => {
  return deleteProductAPI(id).then((res) => res.message);
};

export const selectProductCategories = (state) => state.product.categories;
export const selectProducts = (state) => state.product.products;
export const selectProduct = (state) => state.product.product;
export const selectErrorMessage = (state) => state.product.errorMessage;
export default productSlice.reducer;
