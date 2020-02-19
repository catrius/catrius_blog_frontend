import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import homepage from './homepage';
import singlePostPage from './single-post-page';


const rootReducer = history => combineReducers({
  router: connectRouter(history),
  homepage,
  singlePostPage,
});

export default rootReducer;
