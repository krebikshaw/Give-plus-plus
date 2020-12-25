import React, { useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from './constants/globalStyle';
import { Navbar, Footer } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMe } from './redux/slices/generalSlice/generalSlice';

import {
  HomePage,
  AboutUsPage,
  EntrancePage,
  LoginPage,
  RegisterPage,
  FAQPage,
  ContactUsPage,
  RulesPage,
} from './pages/';

import {
  ApplyForVendorPage,
  UserInfoPage,
  VendorBackstagePage,
  VendorContactPage,
  VendorInfoPage,
} from './pages/userPages';

import {
  ProductPage,
  EditProductPage,
  PostProductPage,
  SearchProductPage,
  CategorizedProductPage,
  VendorShopPage,
} from './pages/productPages';

import { CartPage, CheckoutPage } from './pages/cartPages';

import {
  ClientOrdersPage,
  VendorOrdersPage,
  OrderDetailPage,
} from './pages/orderPages/';

import {
  AdminBackstagePage,
  AdminUserPage,
  AdminProductPage,
  AdminMailPage,
} from './pages/adminPages';

const Root = styled.div``;

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <Root>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes basename='/Give-plus-plus'>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/about'} element={<AboutUsPage />} />
          <Route path={'/entrance'} element={<EntrancePage />} />
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/register'} element={<RegisterPage />} />
          <Route path={'/faq'} element={<FAQPage />} />
          <Route path={'/contact'} element={<ContactUsPage />} />
          <Route path={'/rules'} element={<RulesPage />} />

          <Route path={'/users'}>
            <Route path={'/me'} element={<UserInfoPage />} />
            <Route path={'/:id'} element={<UserInfoPage />} />
            <Route path={'/apply'} element={<ApplyForVendorPage />} />
            <Route path={'/backstage'} element={<VendorBackstagePage />} />
            <Route path={'/contact/:id'} element={<VendorContactPage />} />
            <Route path={'/vendor/:id'} element={<VendorInfoPage />} />
          </Route>

          <Route path={'/products'}>
            <Route path={'/:id'} element={<ProductPage />} />
            <Route path={'/edit/:id'} element={<EditProductPage />} />
            <Route path={'/post'} element={<PostProductPage />} />
            <Route path={'/search/:keyword'} element={<SearchProductPage />} />
            <Route
              path={'/category/:id'}
              element={<CategorizedProductPage />}
            />
            <Route path={'/vendor/:id'} element={<VendorShopPage />} />
          </Route>

          <Route path={'/cart'}>
            <Route path={'/'} element={<CartPage />} />
            <Route path={'/checkout'} element={<CheckoutPage />} />
          </Route>

          <Route path={'/orders'}>
            <Route path={':id'} element={<OrderDetailPage />} />
            <Route path={'/client'} element={<ClientOrdersPage />} />
            <Route path={'/vendor'} element={<VendorOrdersPage />} />
          </Route>

          <Route path={'/admin'}>
            <Route path={'/'} element={<AdminBackstagePage />} />
            <Route path={'/users'} element={<AdminUserPage />} />
            <Route path={'/products'} element={<AdminProductPage />} />
            <Route path={'/mails'} element={<AdminMailPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Root>
  );
};

export default App;
