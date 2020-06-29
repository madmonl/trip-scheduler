import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Trips from '../components/trips/Trips';
import Buses from '../components/buses/Buses';
import NotFoundPage from '../components/notFoundPage/NotFoundPage';

function AppRouter() {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path="/" component={Trips} exact />
        <Route path="/buses" component={Buses} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
