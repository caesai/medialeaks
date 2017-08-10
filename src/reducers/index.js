import { combineReducers } from 'redux';
import {routerStateReducer} from 'redux-router';

import auth from './auth';
import page from './page';

export default combineReducers({
  auth,
  page,
  router: routerStateReducer
});
