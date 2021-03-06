import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import axios from 'axios';
import { createBrowserHistory } from 'history';
import axiosMiddleware from 'redux-axios-middleware';

import rootReducer from 'reducers/root-reducer';
import { API_URL, ENVIRONMENT, PRODUCTION } from 'utils/constants';


export const history = createBrowserHistory();

const client = axios.create({
  baseURL: API_URL,
  responseType: 'json',
});

const store = configureStore({
  reducer: rootReducer(history),
  middleware: [
    axiosMiddleware(client),
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
  devTools: ENVIRONMENT !== PRODUCTION,
});

export default store;
