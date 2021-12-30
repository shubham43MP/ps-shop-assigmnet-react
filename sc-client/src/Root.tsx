import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Homepage from './pages/homepage';
import Login from './pages/login';
import HeaderWrapper from './components/wrappers/header-wrapper';

const RouterHeaderWrapper = (component: React.ElementType) => <HeaderWrapper component={ component } />;

const Root = () => (
  <>
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path='/' element={ RouterHeaderWrapper(Homepage) } />
          <Route path='/login' element={ RouterHeaderWrapper(Login) } />
          {/*
          <Route exact path="/contact" component={ () => RouterWrapper(lazy(() => import('pages/Contact'))) } />
          <Route exact path="/skills" component={ () => RouterWrapper(lazy(() => import('pages/Skills'))) } /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  </>
);

export default Root;
