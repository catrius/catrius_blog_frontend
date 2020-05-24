import { createAction } from '@reduxjs/toolkit';


const callAPI = type => (action, url, params={}, configs={}) => createAction(
  action,
  () => ({
    payload: {
      request: {
        method: type,
        url,
        params,
        ...configs,
      },
    },
  }),
)();

export const get = callAPI('get');
