import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/slices/userSlice/userSlice';
import productReducer from '../redux/slices/productSlice/productSlice';
import orderReducer from '../redux/slices/orderSlice/orderSlice';
import cartReducer from '../redux/slices/cartSlice/cartSlice';
import adminReducer from '../redux/slices/adminSlice/adminSlice';
import generalReducer from '../redux/slices/generalSlice/generalSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    order: orderReducer,
    cart: cartReducer,
    admin: adminReducer,
    general: generalReducer,
  },
});
