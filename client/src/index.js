import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import React from 'react';
import AppRouter from './router/AppRouter';
import './styles/styles.scss';
import Loader from './components/loader/Loader';

const App = (
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

ReactDOM.render(<Loader />, document.getElementById('loader'));
ReactDOM.render(App, document.getElementById('root'));

serviceWorker.unregister();
