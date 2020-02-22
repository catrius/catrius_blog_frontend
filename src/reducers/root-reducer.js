import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import homepage from './homepage';
import singlePostPage from './single-post-page';
import sidebar from './sidebar';


const rootReducer = history => combineReducers({
  router: connectRouter(history),
  homepage,
  singlePostPage,
  sidebar,
});

export default rootReducer;
