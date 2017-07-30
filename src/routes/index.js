import React from 'react';
import {Route, IndexRoute} from 'react-router';

import MainView from '../views/MainView';
import Template from '../containers/Template';
import PostList from '../containers/PostList';
import PostPage from '../containers/PostPage';

export default(
  <Route path='/' >
    <IndexRoute component={Template} />
    <Route path=':id' component={PostPage} />
  </Route>
);
