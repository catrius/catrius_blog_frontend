import { Factory } from 'rosie';
import faker from 'faker';
import slugify from 'slugify';

import CategoryFactory from 'factories/category-factory';


const PostFactory = new Factory()
  .attr('category', () => CategoryFactory.build())
  .attr('title', faker.lorem.sentence)
  .attr('slug', ['title'], (title) => slugify(title))
  .attr('content', faker.lorem.text)
  .attr('excerpt', faker.lorem.text)
  .attr('thumbnail', ['slug'], slug => `/media/photos/post-${slug}.jpeg`)
  .attr('caption', faker.lorem.sentence)
  .attr('image_showing', faker.random.boolean)
  .attr('created', faker.date.recent(10))
  .attr('modified', faker.date.recent(5));


export default PostFactory;
