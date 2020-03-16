import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import posts from 'reducers/posts';
import categories from 'reducers/categories';
import paginator from 'reducers/paginator';
import fetchState from 'reducers/fetch-state';


const rootReducer = history => combineReducers({
  router: connectRouter(history),
  posts,
  categories,
  paginator,
  fetchState
});

export default rootReducer;
