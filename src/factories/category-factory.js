import { Factory } from 'rosie';
import faker from 'faker';
import slugify from 'slugify';


const CategoryFactory = new Factory()
  .attr('name', faker.lorem.word)
  .sequence('slug', ['name'], (i, name) => `${slugify(name)}-i`)
  .attr('description', faker.lorem.sentence);

export default CategoryFactory;
