import moment from 'moment';
import { map, get } from 'lodash';

import { categoryUrl, postUrl } from 'utils/urls';


export const transformPostCategory = category => ({
  pk: category.pk,
  name: category.name,
  url: categoryUrl(category.pk),
});

export const transformPost = post => ({
  pk: post.pk,
  title: post.title,
  date: moment(post.created).format('lll'),
  excerpt: post.excerpt,
  content: post.content,
  category: transformPostCategory(get(post, 'category', {})),
  url: postUrl(post.pk),
});

export const transformCategory = category => ({
  pk: category.pk,
  name: category.name,
  description: category.description,
  postCount: category.post_count,
  url: categoryUrl(category.pk),
});

export const transformCategoryWithPosts = category => ({
  ...transformCategory(category),
  posts: map(category.posts, transformPost),
});
