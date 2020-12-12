import { createSlice } from '@reduxjs/toolkit';
import {
  getUnCheckProductsAPI,
  updateProductStatusAPI,
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
      state.users.push(...action.payload);
    },
    setProducts: (state, action) => {
      state.products.push(...action.payload);
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

export const selectUsers = (state) => state.admin.users;
export const selectProducts = (state) => state.admin.products;
export default adminSlice.reducer;
