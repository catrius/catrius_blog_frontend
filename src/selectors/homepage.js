import { get } from 'lodash';
import moment from 'moment';
import { createSelector } from '@reduxjs/toolkit';


const getAllPosts = state => get(state, 'homepage.allPosts');

const transformPost = post => ({
  pk: post.pk,
  title: post.title,
  date: moment(post.created).format('ll'),
  excerpt: post.excerpt,
  category: post.category,
});

export const allPostsSelector = createSelector(
  getAllPosts,
  posts => posts.map(transformPost),
);
