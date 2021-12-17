import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={ Homepage() } />
      {/* <Route exact path="/about" component={ () => RouterWrapper(About) } />
          <Route exact path="/contact" component={ () => RouterWrapper(lazy(() => import('pages/Contact'))) } />
          <Route exact path="/skills" component={ () => RouterWrapper(lazy(() => import('pages/Skills'))) } /> */}
    </Routes>
  </Router>
)

export default Root