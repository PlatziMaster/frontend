import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import PageNotFound from './pages/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};
