import { createSlice } from '@reduxjs/toolkit';
import { getCategoriesAPI } from '../../../webAPI/productAPI';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    categories: [],
    errorMessage: null,
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { setCategories, setErrorMessage } = productSlice.actions;

export const getProductCategories = () => (dispatch) => {
  getCategoriesAPI().then((result) => {
    if (!result || result.ok === 0)
      return dispatch(
        setErrorMessage(result ? result.message : 'something wrong')
      );
    dispatch(setCategories(result.data));
  });
};

export const selectProductCategories = (state) => state.product.categories;
export default productSlice.reducer;
