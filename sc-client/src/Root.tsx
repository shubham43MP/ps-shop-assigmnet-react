import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Homepage from 'pages/homepage';
import Login from 'pages/login';
import Register from 'pages/register';
import NavbarWrapper from 'components/wrappers/navbar-wrapper';
import Products from 'pages/products';
import Test from 'pages/test';
import theme from './theme';
import LogggedinWrapper from 'components/wrappers/login-wrapper';
import NonLoginWrapper from 'components/wrappers/non-login-wrapper';

const RouteNavbarWrapper = (Component: React.ElementType) => (<NavbarWrapper>
  <Component />
</NavbarWrapper>);

const LoginWrapper = (Component: React.ElementType) => (
  <LogggedinWrapper>
    {
      RouteNavbarWrapper(Component)
    }
  </LogggedinWrapper>
)

const NonLoginPages = (Component: React.ElementType) => (
  <NonLoginWrapper>
    {
      RouteNavbarWrapper(Component)
    }
  </NonLoginWrapper>
)

const Root = () => (
  <>
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path='/home' element={ LoginWrapper(Homepage) } />
          <Route path='/login' element={ NonLoginPages(Login) } />
          <Route path='/register' element={ NonLoginPages(Register) } />
          <Route path='/products' element={ LoginWrapper(Products) } />   
          <Route path='/test' element={ LoginWrapper(Test) } />
        </Routes>
      </Router>
    </ThemeProvider>
  </>
);

export default Root;
