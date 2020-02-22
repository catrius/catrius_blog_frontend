import moment from 'moment';

import { categoryUrl, postUrl } from 'utils/urls';


export const transformPost = post => ({
  pk: post.pk,
  title: post.title,
  date: moment(post.created).format('lll'),
  excerpt: post.excerpt,
  content: post.content,
  category: post.category,
  url: postUrl(post.pk),
});

export const transformCategory = post => ({
  pk: post.pk,
  name: post.name,
  description: post.description,
  postCount: post.post_count,
  url: categoryUrl(post.pk),
});
