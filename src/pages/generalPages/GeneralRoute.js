import React from 'react';
import { useLocation } from 'react-router-dom';
import AboutUsPage from './AboutUsPage';
import EntrancePage from './EntrancePage';
import FAQPage from './FAQPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import RulePage from './RulePage';

const AdminRouter = () => {
  const path = useLocation().pathname.split('/')[2];
  if (!path) return <EntrancePage />;
  if (path === 'about') return <AboutUsPage />;
  if (path === 'faq') return <FAQPage />;
  if (path === 'login') return <LoginPage />;
  if (path === 'register') return <RegisterPage />;
  if (path === 'rule') return <RulePage />;
};

export default AdminRouter;
