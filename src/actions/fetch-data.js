import { createAction } from '@reduxjs/toolkit';

import { ALL_POSTS_URL, FETCH_ALL_POSTS } from 'utils/constants';


export const fetchAllPosts = createAction(
  FETCH_ALL_POSTS,
  () => ({
    payload: {
      request: {
        method: 'get',
        url: ALL_POSTS_URL,
      },
    },
  }),
);
