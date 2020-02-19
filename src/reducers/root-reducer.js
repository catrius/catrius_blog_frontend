import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import homepage from './homepage';


const rootReducer = history => combineReducers({
  router: connectRouter(history),
  homepage,
});

export default rootReducer;
