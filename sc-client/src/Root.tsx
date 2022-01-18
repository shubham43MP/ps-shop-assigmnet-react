import React, { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import LoginPage from 'pages/login'
import SuspenseWrapper from 'components/wrappers/suspense-wrapper';

const Homepage = lazy(() => import('pages/homepage'))
const RegisterPage = lazy(() => import('pages/register'))
const ProductsPage = lazy(() => import('pages/products'))

const Root = () => (
  <>
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <Routes>
        <Route path='/' element={ <Navigate to='/login' /> } />
        <Route path='/home' element={ <SuspenseWrapper><Homepage /></SuspenseWrapper> } />
        <Route path='/login' element={ <SuspenseWrapper><LoginPage /></SuspenseWrapper> } />
        <Route path='/register' element={ <SuspenseWrapper><RegisterPage /></SuspenseWrapper> } />
        <Route path='/products' element={ <SuspenseWrapper><ProductsPage /></SuspenseWrapper> } />
      </Routes>
    </ThemeProvider>
  </>
);

export default Root;
