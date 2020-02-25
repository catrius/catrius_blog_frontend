import { createAction } from '@reduxjs/toolkit';


const createAxiosAction = type => (action, url, params={}, configs={}) => createAction(
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
);

export const get = createAxiosAction('get');
export const post = createAxiosAction('post');
