import { createSlice, isAllOf } from '@reduxjs/toolkit';
import {
  getItem,
  addItem,
  updateItem,
  deleteItem,
  deleteItemsBySeller,
} from "../../../webAPI/cartAPI";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // state
    cart: [],
    errorMessage: null,
    isLoading: false,
    isSelect: false,
    isPaying: false,
    filter: "all",
    
  },
  reducers: {
    // reducer
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsSelect: (state, action) => {
      state.isSelect = action.payload;
    },
    setIsPaying: (state, action) => {
      state.isPaying = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  //action
  setErrorMessage,
  setCart,
  setIsLoading,
  setIsSelect,
  setIsPaying,
  setFilter,
} = cartSlice.actions;

export const getCartItem = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return getItem().then((res) => {
    if (!res || res.ok === 0)
      return dispatch(setErrorMessage(res ? res.message : "no data"));
    dispatch(setCart(res.data));
    dispatch(setIsLoading(false));
    return res.data
  });
};

export const addCartItem = (productId, quantity) => (dispatch) => {
  dispatch(setIsLoading(true));
  return addItem(productId, quantity).then((res) => {
    dispatch(setIsLoading(false));
    return res;
  });
};
export const minusQuantity = (quantity, id) => (dispatch) => {
  dispatch(setIsLoading(true));
  //console.log(quantity);
  quantity--;
  return updateItem(quantity, id).then((res) => {
    //console.log(quantity);
    dispatch(getCartItem());
    dispatch(setIsLoading(false));
    return res;
  });
};
export const addQuantity = (quantity, id) => (dispatch) => {
  dispatch(setIsLoading(true)); 
  //console.log("加一之前的數量:",quantity);
  quantity++ ;
  return updateItem(quantity, id).then((res) => {
    //console.log("加一之後的數量:", quantity);
    dispatch(getCartItem());
    dispatch(setIsLoading(false));
    return res;
  });
};
export const deleteCartItem = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return deleteItem(id).then((res) => {
    dispatch(setIsLoading(false));
    return res;
  });
};
export const deleteCartItemsBySeller = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return deleteItemsBySeller(id).then((res) => {
    dispatch(setIsLoading(false));
    return res;
  });
};
export const selectFilter = (state) => state.cart.filter;
export const selectIsPaying = (state) => state.cart.isPaying;
export const selectIsSelect = (state) => state.cart.isSelect;
export const selectError = (state) => state.cart.errorMessage;
export const selectLoading = (state) => state.cart.isLoading;
export const selectCart = (state) => state.cart.cart;
export default cartSlice.reducer;
