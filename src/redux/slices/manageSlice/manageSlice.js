import { createSlice } from '@reduxjs/toolkit';

export const manageSlice = createSlice({
  name: 'manage',
  initialState: {
    // state
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
} = manageSlice.actions;

export default manageSlice.reducer;
