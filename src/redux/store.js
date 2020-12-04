import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/slices/userSystem/userSlice';
import productReducer from '../redux/slices/productSystem/productSlice';
import orderReducer from '../redux/slices/orderSystem/orderSlice';
import cartReducer from '../redux/slices/cartSystem/cartSlice';
import adminReducer from '../redux/slices/adminSystem/adminSlice';
import manageReducer from '../redux/slices/manageSystem/manageSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    order: orderReducer,
    cart: cartReducer,
    admin: adminReducer,
    manage: manageReducer,
  },
});
