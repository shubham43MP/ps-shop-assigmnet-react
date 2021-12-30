import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Homepage from './pages/homepage';
import Login from './pages/login';
import Register from './pages/register';
import NavbarWrapper from './components/wrappers/navbar-wrapper';
import Test from './pages/test';

const RouteNavbarWrapper = (Component: React.ElementType) => (<NavbarWrapper>
  <Component />
</NavbarWrapper>);

const Root = () => (
  <>
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path='/' element={ RouteNavbarWrapper(Homepage) } />
          <Route path='/login' element={ RouteNavbarWrapper(Login) } />
          <Route path='/register' element={ RouteNavbarWrapper(Register) } />
          <Route path='/test' element={ RouteNavbarWrapper(Test) } />
          {/*
          <Route exact path="/contact" component={ () => RouterWrapper(lazy(() => import('pages/Contact'))) } />
          <Route exact path="/skills" component={ () => RouterWrapper(lazy(() => import('pages/Skills'))) } /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  </>
);

export default Root;
