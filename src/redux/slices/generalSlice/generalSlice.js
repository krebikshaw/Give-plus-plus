import { createSlice } from '@reduxjs/toolkit';
import { setAuthToken, getAuthToken } from '../../../utils';
import {
  loginAPI,
  registerAPI,
  getMeAPI,
  postMailAPI,
} from '../../../webAPI/generalAPI';

const generalSlice = createSlice({
  name: 'general',
  initialState: {
    userId: null,
    errorMessage: null,
    isUserLoading: false,
  },
  reducers: {
    setIsUserLoading(state, action) {
      state.isUserLoading = action.payload;
    },
    setUserId(state, action) {
      state.userId = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  setUserId,
  setErrorMessage,
  setIsUserLoading,
} = generalSlice.actions;

const checkToken = (res, dispatch) => {
  if (res.ok === 1) {
    return setAuthToken(res.token);
  }
  dispatch(setErrorMessage(res.message));
};

export const login = (user) => async (dispatch) => {
  dispatch(setIsUserLoading(true));
  await loginAPI(user).then((res) => checkToken(res, dispatch));
  return dispatch(getMe());
};

export const register = (user) => async (dispatch) => {
  dispatch(setIsUserLoading(true));
  await registerAPI(user).then((res) => checkToken(res, dispatch));
  return dispatch(getMe());
};

export const getMe = () => (dispatch) => {
  dispatch(setIsUserLoading(true));
  if (getAuthToken()) {
    return getMeAPI().then((res) => {
      dispatch(setIsUserLoading(false));
      if (res.ok !== 1) {
        setAuthToken(null);
        return;
      }
      dispatch(setErrorMessage(null));
      dispatch(setUserId(res.data.userId));
      return res.data.userId;
    });
  }
  dispatch(setIsUserLoading(false));
};

export const logout = () => (dispatch) => {
  setAuthToken('');
  dispatch(setUserId(null));
  alert('登出成功');
};

export const postMail = (mail) => (dispatch) => {
  dispatch(setIsUserLoading(true));
  return postMailAPI(mail).then((res) => {
    dispatch(setIsUserLoading(false));
    return res;
  });
};

export const selectUserId = (state) => state.general.userId;
export const selectErrorMessage = (state) => state.general.errorMessage;
export const selectIsUserLoading = (state) => state.general.isUserLoading;
export default generalSlice.reducer;
