import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import posts from 'reducers/posts-reducers';
import pages from 'reducers/pages-reducers';
import categories from 'reducers/categories-reducers';
import paginator from 'reducers/paginator-reducers';
import fetchState from 'reducers/fetch-state-reducers';


const rootReducer = history => combineReducers({
  router: connectRouter(history),
  posts,
  pages,
  categories,
  paginator,
  fetchState,
});

export default rootReducer;
