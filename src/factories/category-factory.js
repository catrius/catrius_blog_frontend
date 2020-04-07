import { Factory } from 'rosie';
import faker from 'faker';
import slugify from 'slugify';


const CategoryFactory = new Factory()
  .attr('name', faker.lorem.word)
  .attr('slug', ['name'], (name) => slugify(name))
  .attr('description', faker.lorem.sentence);

export default CategoryFactory;
