import React from 'react';
import { Provider } from 'react-redux';
import routes from './routes';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

export default class App extends React.Component {
  static get propTypes() {
    return {
      store: React.PropTypes.object.isRequired
    }
  }
  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={hashHistory} routes={routes} />
      </Provider>
    )
  }
}
