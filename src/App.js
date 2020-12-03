import React, { useEffect } from 'react';
import useUser from './hooks/useUser';
import styled from 'styled-components';
import Navbar from './components/Navbar';
// import PageLink from "./components/PageLink";
// import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import Article from "./pages/Article";
// import Update from "./pages/Update";
// import Post from "./pages/Post";
// import List from "./pages/List";
// import About from "./pages/About";
import Footer from './components/Footer';
import GlobalStyle from './constants/style';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const theme = {
  colors: {
    primary: '#245277',
    text: '#787b7b',
    cross_line: '#6daeaf',
    read_more: '#0891ff',
    error: '#f53224',
  },
  bg_colors: {
    bg_primary: '#f2fffb',
  },
  font_size: {
    brand: '2rem',
    title: '1.6rem',
    text: '1rem',
    input: '1.5rem',
    hover: '1.05rem',
  },
};

const Root = styled.div`
  position: relative;
  background: url(https://static.wixstatic.com/media/bc3ec7bc825c4e6ca746c659189cea83.jpg)
    center/cover no-repeat;
  background-attachment: fixed;
`;

const Wrapper = styled.div`
  min-height: 90vh;
  position: relative;
  padding: 40px 60px;
  margin: 0 220px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  z-index: 2;
`;

const App = () => {
  const { isLoadingGetMe, initialize } = useUser();
  useEffect(() => initialize(), []);

  return (
    <Root>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Navbar />
          <Routes basename='/react-blog'>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/register'} element={<RegisterPage />} />
            <Route path={'/login'} element={<LoginPage />} />
            <Route path={'/posts'} element={<PostsPage />} />
            <Route path={'/post/:id'} element={<PostPage />} />
            <Route path={'/post/edit/:id'} element={<EditPostPage />} />
            <Route path={'/new-post'} element={<NewPostPage />} />
            <Route path={'/about-me'} element={<AboutMePage />} />
          </Routes>
          <Footer>Made with ❤️ by Nicolas</Footer>
        </BrowserRouter>
      </ThemeProvider>
    </Root>
  );
};

export default App;
