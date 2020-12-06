import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    // other state
    user: null,
    errorMessage: null,
  },
  reducers: {
    // other reducer
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  // other action
  setErrorMessage,
} = userSlice.actions;

export const getUser = () => (dispatch) => {
  // API
};

export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
