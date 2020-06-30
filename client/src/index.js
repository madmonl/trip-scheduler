import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import React from 'react';
import AppRouter from './router/AppRouter';
import './styles/styles.scss';
import Loader from './components/loader/Loader';

const App = (
  <div>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
    <Loader />
  </div>
);

ReactDOM.render(App, document.getElementById('root'));

serviceWorker.unregister();
