import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import HomePage from './pages/generalPages/HomePage';
import GeneralRoute from './pages/generalPages/GeneralRoute';
import UserRoute from './pages/userPages/UserRoute';
import ProductRoute from './pages/productPages/ProductRoute';
import CartRoute from './pages/cartPages/CartRoute';
import OrderRoute from './pages/orderPages/OrderRoute';
import AdminRoute from './pages/adminPages/AdminRoute';
import Footer from './components/Footer';
import GlobalStyle from './constants/style';
import generalTheme from './constants/theme.js';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Root = styled.div``;

const Wrapper = styled.div`
  margin-top: 110px;
`;

const App = () => {
  return (
    <Root>
      <ThemeProvider theme={generalTheme}>
        <GlobalStyle />
        <Navbar />
        <Wrapper>
          <BrowserRouter>
            <Routes basename='/'>
              <Route path={'/'} element={<HomePage />} />
              <Route path={'/general*'} element={<GeneralRoute />} />
              <Route path={'/user*'} element={<UserRoute />} />
              <Route path={'/product*'} element={<ProductRoute />} />
              <Route path={'/cart*'} element={<CartRoute />} />
              <Route path={'/order*'} element={<OrderRoute />} />
              <Route path={'/admin*'} element={<AdminRoute />} />
            </Routes>
          </BrowserRouter>
        </Wrapper>
        <Footer />
      </ThemeProvider>
    </Root>
  );
};

export default App;
