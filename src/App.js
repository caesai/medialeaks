import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import routes from './routes';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={hashHistory} routes={routes} />
      </Provider>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
