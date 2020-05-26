import { Factory } from 'rosie';
import faker from 'faker';
import slugify from 'slugify';
import { map } from 'lodash';

import CategoryFactory from 'factories/category-factory';
import { transformPost } from 'selectors/transfomers';


const PostFactory = new Factory()
  .attr('category', () => CategoryFactory.build())
  .attr('title', faker.lorem.sentence)
  .sequence('slug', ['title'], (i, title) => `${slugify(title)}-i`)
  .attr('content', faker.lorem.text)
  .attr('excerpt', faker.lorem.text)
  .attr('thumbnail', ['slug'], slug => `/media/photos/post-${slug}.jpeg`)
  .attr('caption', faker.lorem.sentence)
  .attr('image_showing', faker.random.boolean)
  .attr('created', faker.date.recent(10))
  .attr('modified', faker.date.recent(5));

export const TransformedPostFactory = () => transformPost(PostFactory.build());
export const TransformedPostsFactory = count => map(PostFactory.buildList(count), transformPost);

export default PostFactory;
