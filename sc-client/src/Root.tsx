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

const RouteNavbarWrapper = (Component: React.ElementType) => (<NavbarWrapper>
  <Component />
</NavbarWrapper>);

const Root = () => (
  <>
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path='/home' element={ RouteNavbarWrapper(Homepage) } />
          <Route path='/login' element={ RouteNavbarWrapper(Login) } />
          <Route path='/register' element={ RouteNavbarWrapper(Register) } />
          <Route path='/products' element={ RouteNavbarWrapper(Products) } />         
          <Route path='/test' element={ RouteNavbarWrapper(Test) } />
        </Routes>
      </Router>
    </ThemeProvider>
  </>
);

export default Root;
