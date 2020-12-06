import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    // state
    cart: null,
    errorMessage: null,
  },
  reducers: {
    // reducer
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  //action
  setErrorMessage,
} = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;
export default cartSlice.reducer;
