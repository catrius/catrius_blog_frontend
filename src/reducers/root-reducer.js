import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import posts from 'reducers/posts';
import categories from 'reducers/categories';
import post from 'reducers/post';
import paginator from 'reducers/paginator';


const rootReducer = history => combineReducers({
  router: connectRouter(history),
  posts,
  post,
  categories,
  paginator,
});

export default rootReducer;
