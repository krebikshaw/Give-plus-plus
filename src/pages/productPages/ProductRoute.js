import React from 'react';
import { useLocation } from 'react-router-dom';
import EditProductPage from './EditProductPage';
import PostProductPage from './PostProductPage';
import ProductPage from './ProductPage';
import SearchProductPage from './SearchProductPage';
import VendorShopPage from './VendorShopPage';

const AdminRouter = () => {
  const path = useLocation().pathname.split('/')[2];
  if (!path) return <ProductPage />;
  if (path === 'edit') return <EditProductPage />;
  if (path === 'post') return <PostProductPage />;
  if (path === 'search') return <SearchProductPage />;
  if (path === 'vendor') return <VendorShopPage />;
};

export default AdminRouter;
