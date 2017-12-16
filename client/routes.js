import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import DashboardPage from './components/dashboard/DashboardPage';
import NotFoundPage from './components/error/NotFoundPage';
import FundsPage from './components/funds/FundsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DashboardPage} />
    <Route path="home" component={DashboardPage} />
    <Route path="funds" component={FundsPage} />
    <Route path="*" component={DashboardPage} /> 
  </Route>
)
