import moment from 'moment';
import { get } from 'lodash';

import { categoryUrl, postUrl } from 'utils/urls';


export const transformPostCategory = category => ({
  pk: get(category, 'pk'),
  name: get(category, 'name', ''),
  url: categoryUrl(get(category, 'pk')),
});

export const transformPost = post => {
  const created = get(post, 'created');
  const momentCreated = created && moment(created);
  return {
    pk: get(post, 'pk'),
    title: get(post, 'title', ''),
    date: momentCreated && momentCreated.format('LLL'),
    shortDate: momentCreated && momentCreated.format('ll'),
    excerpt: get(post, 'excerpt', ''),
    content: get(post, 'content', ''),
    thumbnail: get(post, 'thumbnail', ''),
    caption: get(post, 'caption', ''),
    imageShowing: get(post, 'image_showing', true),
    category: transformPostCategory(get(post, 'category', {})),
    url: postUrl(get(post, 'pk')),
  };
};

export const transformCategory = category => ({
  pk: get(category, 'pk'),
  name: get(category, 'name', ''),
  description: get(category, 'description', ''),
  postCount: get(category, 'post_count', null),
  url: categoryUrl(get(category, 'pk', '')),
});
