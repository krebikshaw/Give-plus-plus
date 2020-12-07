import { createSlice } from '@reduxjs/toolkit';
import { getMeAPI } from '../../../webAPI/userAPI';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    errorMessage: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },

    setVendorInfo: (state, action) => {
      state.vendorInfo = action.payload;
    },
  },
});

export const { setUser, setErrorMessage } = userSlice.actions;

export const getMe = () => (dispatch) => {
  getMeAPI().then((result) => {
    if (!result || result.ok === 0)
      return dispatch(
        setErrorMessage(result ? result.message : 'something wrong')
      );
    dispatch(setUser(result.data));
  });
};

export const getVendorInfo = (id) => (dispatch) => {
  return getVendorInfoAPI(id).then((res) => {
    if (res.ok === 0) {
      return dispatch(setErrorMessage(res ? res.message : 'something wrong'));
    }
    dispatch(setVendorInfo(res.data));
  });
};

export const selectUser = (state) => state.user.user;
export const selectErrorMessage = (state) => state.user.errorMessage;
export default userSlice.reducer;
