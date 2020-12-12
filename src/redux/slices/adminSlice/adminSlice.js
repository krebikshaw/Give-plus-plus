import { createSlice } from '@reduxjs/toolkit';
import {
  getUnCheckProductsAPI,
  updateProductStatusAPI,
  getUsersAPI,
  searchUsersAPI,
  getProductsAPI,
  searchProductsAPI,
} from '../../../webAPI/adminAPI';

export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    users: [],
    products: [],
    errorMessage: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { setUsers, setProducts, setErrorMessage } = adminSlice.actions;

export const getUnCheckProducts = (page) => (dispatch) => {
  dispatch(setProducts([]));
  dispatch(setErrorMessage(''));
  return getUnCheckProductsAPI(page).then((result) => {
    if (!result || result.ok === 0)
      return dispatch(
        setErrorMessage(result ? result.message : 'something wrong')
      );
    dispatch(setProducts(result.data));
    return result;
  });
};

export const updateProductStatus = (id, status) => (dispatch) => {
  dispatch(setErrorMessage(''));
  return updateProductStatusAPI(id, status).then((result) => {
    if (!result || result.ok === 0)
      return dispatch(
        setErrorMessage(result ? result.message : 'something wrong')
      );
    return result;
  });
};

export const getUsers = (params) => (dispatch) => {
  dispatch(setErrorMessage(''));
  return getUsersAPI(params).then((result) => {
    if (!result || result.ok === 0)
      return dispatch(
        setErrorMessage(result ? result.message : 'something wrong')
      );
    dispatch(setUsers(result.data));
    return result;
  });
};

export const searchUsers = (keyword) => (dispatch) => {
  dispatch(setErrorMessage(''));
  return searchUsersAPI(keyword).then((result) => {
    if (!result || result.ok === 0)
      return dispatch(
        setErrorMessage(result ? result.message : 'something wrong')
      );
    dispatch(setUsers(result.data));
    return result;
  });
};

export const getProducts = (params) => (dispatch) => {
  dispatch(setErrorMessage(''));
  return getProductsAPI(params).then((result) => {
    if (!result || result.ok === 0)
      return dispatch(
        setErrorMessage(result ? result.message : 'something wrong')
      );
    dispatch(setProducts(result.data));
    return result;
  });
};

export const searchProducts = (keyword) => (dispatch) => {
  dispatch(setErrorMessage(''));
  return searchProductsAPI(keyword).then((result) => {
    if (!result || result.ok === 0)
      return dispatch(
        setErrorMessage(result ? result.message : 'something wrong')
      );
    dispatch(setProducts(result.data));
    return result;
  });
};

export const selectUsers = (state) => state.admin.users;
export const selectProducts = (state) => state.admin.products;
export default adminSlice.reducer;
