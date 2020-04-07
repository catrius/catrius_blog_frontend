import moment from 'moment';
import { get } from 'lodash';

import { categoryUrl, postUrl } from 'utils/urls';


export const transformPostCategory = category => ({
  slug: get(category, 'slug', ''),
  name: get(category, 'name', ''),
  url: categoryUrl(get(category, 'slug')),
});

export const transformPost = post => {
  const created = get(post, 'created');
  const momentCreated = created && moment(created);
  return {
    slug: get(post, 'slug', ''),
    title: get(post, 'title', ''),
    date: momentCreated && momentCreated.format('LLL'),
    shortDate: momentCreated && momentCreated.format('ll'),
    excerpt: get(post, 'excerpt', ''),
    content: get(post, 'content', ''),
    thumbnail: get(post, 'thumbnail', ''),
    caption: get(post, 'caption', ''),
    imageShowing: get(post, 'image_showing', true),
    category: transformPostCategory(get(post, 'category', {})),
    url: postUrl(get(post, 'slug')),
  };
};

export const transformCategory = category => ({
  slug: get(category, 'slug', ''),
  name: get(category, 'name', ''),
  description: get(category, 'description', ''),
  url: categoryUrl(get(category, 'slug', '')),
});
