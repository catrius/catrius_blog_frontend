import { createSelector } from '@reduxjs/toolkit';
import { get } from 'lodash';

import { transformPost } from 'selectors/transfomers';


const getPost = state => get(state, 'singlePostPage.post');
export const getPK = (state, props) => parseInt(get(props, 'match.params.pk', ''));

export const postSelector = createSelector(
  getPost,
  post => transformPost(post),
);
