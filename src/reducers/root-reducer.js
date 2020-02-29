import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import posts from 'reducers/posts';
import header from 'reducers/header';
import postPage from 'reducers/post-page';
import paginator from 'reducers/paginator';


const rootReducer = history => combineReducers({
  router: connectRouter(history),
  posts,
  postPage,
  header,
  paginator,
});

export default rootReducer;
