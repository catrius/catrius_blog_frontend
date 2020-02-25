import moment from 'moment';
import { map, get } from 'lodash';

import { categoryUrl, postUrl } from 'utils/urls';


export const transformPostCategory = category => ({
  pk: get(category, 'pk'),
  name: get(category, 'name', ''),
  url: categoryUrl(get(category, 'pk')),
});

export const transformPost = post => ({
  pk: get(post, 'pk'),
  title: get(post, 'title', ''),
  date: moment(get(post, 'created')).format('lll'),
  excerpt: get(post, 'excerpt', ''),
  content: get(post, 'content', ''),
  category: transformPostCategory(get(post, 'category', {})),
  url: postUrl(get(post, 'pk')),
});

export const transformCategory = category => ({
  pk: get(category, 'pk'),
  name: get(category, 'name', ''),
  description: get(category, 'description', ''),
  postCount: get(category, 'post_count', null),
  url: categoryUrl(get(category, 'pk', '')),
});

export const transformCategoryWithPosts = category => ({
  ...transformCategory(category),
  posts: map(get(category, 'posts', []), transformPost),
});
