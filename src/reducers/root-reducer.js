import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import posts from 'reducers/posts';
import sidebar from 'reducers/sidebar';
import postPage from 'reducers/post-page';
import paginator from 'reducers/paginator';


const rootReducer = history => combineReducers({
  router: connectRouter(history),
  posts,
  postPage,
  sidebar,
  paginator,
});

export default rootReducer;
