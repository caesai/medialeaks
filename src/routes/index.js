import React from 'react';
import {Route, IndexRoute} from 'react-router';

import MainView from '../views/MainView';
import PostTemplate from '../containers/PostTemplate';
import PostList from '../containers/PostList';
import PostPage from '../containers/PostPage';

export default(
  <Route path='/' component={MainView}>
    <IndexRoute component={PostList} />
    <Route path=':id' component={PostPage} />
  </Route>
);
