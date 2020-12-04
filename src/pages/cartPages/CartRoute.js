import React from 'react';
import { useLocation } from 'react-router-dom';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';

const AdminRouter = () => {
  const path = useLocation().pathname.split('/')[2];
  if (!path) return <CartPage />;
  if (path === 'checkout') return <CheckoutPage />;
};

export default AdminRouter;
