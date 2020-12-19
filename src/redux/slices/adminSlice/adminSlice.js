import { createSlice } from '@reduxjs/toolkit';
import {
  getUnCheckProductsAPI,
  updateProductStatusAPI,
  getUsersAPI,
  searchUsersAPI,
  getProductsAPI,
  searchProductsAPI,
  getMailsAPI,
} from '../../../webAPI/adminAPI';

export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    users: [],
    count: 0,
    products: [],
    mails: [],
    mail: {},
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
    setCount: (state, action) => {
      state.count = action.payload;
    },
    setMails: (state, action) => {
      state.mails = action.payload;
    },
    setMail: (state, action) => {
      state.mail = action.payload;
    },
  },
});

export const {
  setUsers,
  setProducts,
  setErrorMessage,
  setCount,
  setMails,
  setMail,
} = adminSlice.actions;

export const getUnCheckProducts = (page) => (dispatch) => {
  dispatch(setProducts([]));
  dispatch(setErrorMessage(''));
  return getUnCheckProductsAPI(page).then((result) => {
    if (!result || result.ok === 0)
      return dispatch(
        setErrorMessage(result ? result.message : 'something wrong')
      );
    dispatch(setProducts(result.data.products));
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
    dispatch(setUsers(result.data.users));
    dispatch(setCount(result.data.count));
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
    dispatch(setUsers(result.data.users));
    dispatch(setCount(result.data.count));
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
    dispatch(setProducts(result.data.products));
    dispatch(setCount(result.data.count));
    return result;
  });
};

export const searchProducts = (params) => (dispatch) => {
  dispatch(setErrorMessage(''));
  return searchProductsAPI(params).then((result) => {
    if (!result || result.ok === 0)
      return dispatch(
        setErrorMessage(result ? result.message : 'something wrong')
      );
    dispatch(setProducts(result.data.products));
    dispatch(setCount(result.data.count));
    return result;
  });
};

export const getMails = () => (dispatch) => {
  dispatch(setErrorMessage(''));
  return getMailsAPI().then((result) => {
    if (!result || result.ok === 0)
      return dispatch(
        setErrorMessage(result ? result.message : 'something wrong')
      );
    dispatch(setMails(result.data));
    return result;
  });
};

export const selectCount = (state) => state.admin.count;
export const selectUsers = (state) => state.admin.users;
export const selectProducts = (state) => state.admin.products;
export const selectMails = (state) => state.admin.mails;
export const selectMail = (state) => state.admin.mail;
export default adminSlice.reducer;
