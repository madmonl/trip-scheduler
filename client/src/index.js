import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AppRouter from './router/AppRouter';
import { fetchBuses } from './components/buses/busesSlice';
import { fetchTrips } from './components/trips/tripsSlice';
import './styles/styles.scss';
import Loader from './components/loader/Loader';

async function renderApp(App) {
  ReactDOM.render(<Loader />, document.getElementById('loader'));
  await Promise.all([fetchBuses(), fetchTrips()]);
  ReactDOM.render(App, document.getElementById('root'));
  const loader = document.getElementById('loader');
  loader.remove();
}

const App = (
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>

);

renderApp(App);

serviceWorker.unregister();
