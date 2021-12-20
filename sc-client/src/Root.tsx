import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import Homepage from './pages/homepage'

const Root = () => (
  <>
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={ Homepage() } />
          {/* <Route exact path="/about" component={ () => RouterWrapper(About) } />
          <Route exact path="/contact" component={ () => RouterWrapper(lazy(() => import('pages/Contact'))) } />
          <Route exact path="/skills" component={ () => RouterWrapper(lazy(() => import('pages/Skills'))) } /> */}
        </Routes>
      </Router>

    </ThemeProvider>
  </>
)

export default Root