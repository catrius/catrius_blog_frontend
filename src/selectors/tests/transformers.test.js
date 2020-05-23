import moment from 'moment';

import { transformCategory, transformPost } from 'selectors/transfomers';
import { categoryUrl, postUrl } from 'utils/urls';
import CategoryFactory from 'factories/category-factory';
import PostFactory from 'factories/post-factory';


describe('transformCategory', () => {
  it('should transform category', () => {
    const rawCategory = CategoryFactory.build();

    expect(transformCategory(rawCategory)).toEqual({
      slug: rawCategory.slug,
      name: rawCategory.name,
      description: rawCategory.description,
      url: categoryUrl(rawCategory.slug),
    });
  });
});

describe('transformPost', () => {
  it('should transform post', () => {
    const rawPost = PostFactory.build();

    expect(transformPost(rawPost)).toEqual({
      slug: rawPost.slug,
      title: rawPost.title,
      date: moment(rawPost.created).format('LLL'),
      shortDate: moment(rawPost.created).format('ll'),
      excerpt: rawPost.excerpt,
      content: rawPost.content,
      thumbnail: rawPost.thumbnail,
      caption: rawPost.caption,
      imageShowing: rawPost.image_showing,
      category: transformCategory(rawPost.category),
      url: postUrl(rawPost.slug),
    });
  });
});
