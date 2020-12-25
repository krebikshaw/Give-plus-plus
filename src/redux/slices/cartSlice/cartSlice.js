import { createSlice } from "@reduxjs/toolkit";
import {
  getItem,
  addItem,
  updateItem,
  deleteItem,
  deleteItemsBySeller,
  createOrder as createOrderAPI,
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
    price: 0,
    payWay: false,
    completeOrder: false,
    orderNumber: false,
    quantity: 1,
    hasAdd: false,
    update: false,
    checked: false,
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
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setPayWay: (state, action) => {
      state.payWay = action.payload;
    },
    setComplete: (state, action) => {
      state.completeOrder = action.payload;
    },
    setOrderNumber: (state, action) => {
      state.orderNumber = action.payload;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    setHasAdd: (state, action) => {
      state.hasAdd = action.payload;
    },
    setUpdate: (state, action) => {
      state.update = action.payload;
    },
    setChecked: (state, action) => {
      state.checked = action.payload;
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
  setPrice,
  setPayWay,
  setComplete,
  setOrderNumber,
  setQuantity,
  setHasAdd,
  setUpdate,
  setChecked,
} = cartSlice.actions;

export const getCartItem = () => (dispatch) => {
  return getItem().then((res) => {
    if (!res || res.ok === 0)
      return dispatch(setErrorMessage(res ? res.message : "no data"));
    dispatch(setCart(res.data));
    return res.data;
  });
};

export const addCartItem = (productId, quantity, id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return addItem(productId, quantity, id).then((res) => {
    dispatch(getCartItem());
    dispatch(setIsLoading(false));
    return res;
  });
};
export const minusQuantity = (quantity, id) => (dispatch) => {
  quantity--;
  return updateItem(quantity, id).then((res) => {
    dispatch(getCartItem());
    return res;
  });
};
export const addQuantity = (quantity, id) => (dispatch) => {
  quantity++;
  return updateItem(quantity, id).then((res) => {
    dispatch(getCartItem());
    return res;
  });
};
export const deleteCartItem = (id) => (dispatch) => {
  return deleteItem(id).then((res) => {
    dispatch(getCartItem());
    return res;
  });
};
export const deleteCartItemsBySeller = (id) => (dispatch) => {
  return deleteItemsBySeller(id).then((res) => {
    dispatch(getCartItem());
    return res;
  });
};
export const createOrder = (readyToOrderItems) => (dispatch) => {
  dispatch(setIsLoading(true));
  return createOrderAPI(readyToOrderItems).then((res) => {
    dispatch(setIsLoading(false));
    console.log(res.orderNumber);
    dispatch(setOrderNumber(res.orderNumber));
  });
};

export const selectChecked = (state) => state.cart.checked;
export const selectUpdate = (state) => state.cart.update;
export const selectAdd = (state) => state.cart.hasAdd;
export const selectQuantity = (state) => state.cart.quantity;
export const selectOrderNumber = (state) => state.cart.orderNumber;
export const selectComplete = (state) => state.cart.completeOrder;
export const selectPayWay = (state) => state.cart.payWay;
export const selectPrice = (state) => state.cart.price;
export const selectFilter = (state) => state.cart.filter;
export const selectIsPaying = (state) => state.cart.isPaying;
export const selectIsSelect = (state) => state.cart.isSelect;
export const selectError = (state) => state.cart.errorMessage;
export const selectLoading = (state) => state.cart.isLoading;
export const selectCarts = (state) => state.cart.cart;
export default cartSlice.reducer;
