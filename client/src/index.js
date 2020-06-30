import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AppRouter from './router/AppRouter';
import './styles/styles.scss';
import Loader from './components/loader/Loader';

const App = (
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
    <Loader />
  </React.StrictMode>

);

ReactDOM.render(App, document.getElementById('root'));

serviceWorker.unregister();
