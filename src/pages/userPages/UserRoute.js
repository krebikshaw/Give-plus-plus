import React from 'react';
import { useLocation } from 'react-router-dom';
import ApplyForVendorPage from './ApplyForVendorPage';
import UserInfoPage from './UserInfoPage';
import VendorBackstagePage from './VendorBackstagePage';
import VendorContactPage from './VendorContactPage';
import VendorInfoPage from './VendorInfoPage';

const AdminRouter = () => {
  const path = useLocation().pathname.split('/')[2];
  if (!path) return <UserInfoPage />;
  if (path === 'apply') return <ApplyForVendorPage />;
  if (path === 'backstage') return <VendorBackstagePage />;
  if (path === 'contact') return <VendorContactPage />;
  if (path === 'vendor') return <VendorInfoPage />;
};

export default AdminRouter;
