import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import CompanyInfo from './pages/CompanyInfo';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={About} path="/about" />
      <Route component={CompanyInfo} path="/company-details" />
    </BrowserRouter>
  );
};

export default Routes;
