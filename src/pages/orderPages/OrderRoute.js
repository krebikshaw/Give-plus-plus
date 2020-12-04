import React from 'react';
import { useLocation } from 'react-router-dom';
import ClientOrderPage from './ClientOrderPage';
import OrderDetailPage from './OrderDetailPage';
import VendorOrderPage from './VendorOrderPage';

const AdminRouter = () => {
  const path = useLocation().pathname.split('/')[2];
  if (!path) return <OrderDetailPage />;
  if (path === 'client') return <ClientOrderPage />;
  if (path === 'vendor') return <VendorOrderPage />;
};

export default AdminRouter;
