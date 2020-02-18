import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from 'reducers/root-reducer';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';

import { BASE_API_URL } from 'utils/constants';


const client = axios.create({
  baseURL: BASE_API_URL,
  responseType: 'json',
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    axiosMiddleware(client),
    ...getDefaultMiddleware(),
  ],
  devTools: true,
});

export default store;
