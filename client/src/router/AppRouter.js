import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Trips from '../components/trips/Trips';
import Buses from '../components/buses/Buses';
import Bus from '../components/bus/Bus';
import NotFoundPage from '../components/notFoundPage/NotFoundPage';
import Header from '../components/header/Header';

const history = createHistory();

function AppRouter() {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" component={Trips} exact />
        <Route path="/buses" component={Buses} exact />
        <Route path="/buses/:busId" component={Bus} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
