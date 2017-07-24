import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router';
import configureStore from './src/store/configureStore';

import App from './src/App';

const store = configureStore(browserHistory, window.__INITIAL_STATE__);

const node = (
  <App store={store} />
);

ReactDOM.render(
  node,
  document.getElementById('app')
);
