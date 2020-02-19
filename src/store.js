import { createBrowserHistory } from 'history';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';

import rootReducer from 'reducers/root-reducer';
import { BASE_API_URL } from 'utils/constants';


export const history = createBrowserHistory();


const client = axios.create({
  baseURL: BASE_API_URL,
  responseType: 'json',
});

const store = configureStore({
  reducer: rootReducer(history),
  middleware: [
    axiosMiddleware(client),
    ...getDefaultMiddleware(),
  ],
  devTools: true,
});

export default store;
