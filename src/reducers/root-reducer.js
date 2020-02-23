import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import homepage from 'reducers/homepage';
import sidebar from 'reducers/sidebar';
import postPage from 'reducers/post-page';
import categoryPage from 'reducers/category-page';


const rootReducer = history => combineReducers({
  router: connectRouter(history),
  homepage,
  postPage,
  sidebar,
  categoryPage,
});

export default rootReducer;
