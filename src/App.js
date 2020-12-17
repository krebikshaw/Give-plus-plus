import React, { useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from './constants/globalStyle';
import generalTheme from './constants/theme.js';
import { Navbar, Footer } from './components';
import { HelperButton } from './components/Button';
import { ThemeProvider } from 'styled-components';
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
      <ThemeProvider theme={generalTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Navbar />
          <Routes basename='/'>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/about'} element={<AboutUsPage />} />
            <Route path={'/entrance'} element={<EntrancePage />} />
            <Route path={'/login'} element={<LoginPage />} />
            <Route path={'/register'} element={<RegisterPage />} />
            <Route path={'/faq'} element={<FAQPage />} />
            <Route path={'/contact'} element={<ContactUsPage />} />
            <Route path={'/rules'} element={<RulesPage />} />

            <Route path={'/users'}>
              <Route path={'/me'} element={<UserInfoPage />}></Route>
              <Route path={'/:id'} element={<UserInfoPage />}></Route>
              <Route path={'/apply'} element={<ApplyForVendorPage />}></Route>
              <Route path={'/backstage'} element={<VendorBackstagePage />}></Route>
              <Route path={'/contact/:id'} element={<VendorContactPage />}></Route>
              <Route path={'/vendor/:id'} element={<VendorInfoPage />}></Route>
            </Route>

            <Route path={'/products'}>
              <Route path={'/:id'} element={<ProductPage />}></Route>
              <Route path={'/edit/:id'} element={<EditProductPage />}></Route>
              <Route path={'/post'} element={<PostProductPage />}></Route>
              <Route path={'/search/:keyword'} element={<SearchProductPage />}></Route>
              <Route path={'/category/:id'} element={<CategorizedProductPage />}></Route>
              <Route path={'/vendor/:id'} element={<VendorShopPage />}></Route>
            </Route>

            <Route path={'/cart'}>
              <Route path={'/'} element={<CartPage />}></Route>
              <Route path={'/checkout'} element={<CheckoutPage />}></Route>
            </Route>

            <Route path={'/orders'}>
              <Route path={':id'} element={<OrderDetailPage />}></Route>
              <Route path={'/client'} element={<ClientOrdersPage />}></Route>
              <Route path={'/vendor'} element={<VendorOrdersPage />}></Route>
            </Route>

            <Route path={'/admin'}>
              <Route path={'/'} element={<AdminBackstagePage />}></Route>
              <Route path={'/users'} element={<AdminUserPage />}></Route>
              <Route path={'/products'} element={<AdminProductPage />}></Route>
              <Route path={'/mails'} element={<AdminMailPage />}></Route>
            </Route>
          </Routes>
          <Footer />
          <HelperButton />
        </BrowserRouter>
      </ThemeProvider>
    </Root>
  );
};

export default App;
