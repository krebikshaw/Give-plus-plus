import { createSlice } from "@reduxjs/toolkit";
import { getVendorInfoAPI } from "../../../webAPI/userAPI";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    // other state
    user: null,
    vendorInfo: [],
    errorMessage: null,
  },
  reducers: {
    // other reducer
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },

    setVendorInfo: (state, action) => {
      state.vendorInfo = action.payload;
    },
  },
});

export const {
  // other action
  setErrorMessage,
  setVendorInfo,
} = userSlice.actions;

export const getUser = () => (dispatch) => {
  // API
};

export const getVendorInfo = (id) => (dispatch) => {
  return getVendorInfoAPI(id).then((res) => {
    if (res.ok === 0) {
      return dispatch(setErrorMessage(res ? res.message : "something wrong"));
    }
    dispatch(setVendorInfo(res.data));
  });
};

export const selectUser = (state) => state.user.user;
export const selectVendorInfo = (state) => state.user.vendorInfo;
export const selectErrorMessage = (state) => state.user.errorMessage;
export default userSlice.reducer;
