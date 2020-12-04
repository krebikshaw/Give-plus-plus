import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminBackstagePage from './AdminBackstagePage';
import AdminMailPage from './AdminMailPage';
import AdminProductPage from './AdminProductPage';
import AdminUserPage from './AdminUserPage';

const AdminRouter = () => {
  const path = useLocation().pathname.split('/')[2];
  if (!path) return <AdminBackstagePage />;
  if (path === 'mail') return <AdminMailPage />;
  if (path === 'product') return <AdminProductPage />;
  if (path === 'user') return <AdminUserPage />;
};

export default AdminRouter;
