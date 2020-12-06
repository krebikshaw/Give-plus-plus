import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    // state
    order: null,
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
} = orderSlice.actions;

export const selectOrder = (state) => state.order.order;
export default orderSlice.reducer;
