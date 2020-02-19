import { createAction } from '@reduxjs/toolkit';


const createAxiosAction = type => (action, url) => createAction(
  action,
  () => ({
    payload: {
      request: {
        method: type,
        url,
      },
    },
  }),
);

export const get = createAxiosAction('get');
export const post = createAxiosAction('post');
