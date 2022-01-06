import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Login from 'pages/login';
import Register from 'pages/register';
import Homepage from 'pages/homepage';
import Products from 'pages/products';
import theme from './theme';

const Root = () => (
  <>
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <Routes>
        <Route path='/home' element={ Homepage() } />
        <Route path='/login' element={ Login() } />
        <Route path='/register' element={ Register() } />
        <Route path='/products' element={ Products() } />
      </Routes>
    </ThemeProvider>
  </>
);

export default Root;
