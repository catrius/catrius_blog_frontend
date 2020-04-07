import { each } from 'lodash';

import {
  categoriesSelector,
  categorySelector,
  fetchedCategoriesSelector,
  getCategories,
} from 'selectors/categories-selectors';
import CategoryFactory from 'factories/category-factory';


let rawCategories;
let state;

const assertCategory = (category, rawCategory) => {
  expect(category).toEqual({
    slug: rawCategory.slug,
    name: rawCategory.name,
    description: rawCategory.description,
    url: `/category/${ rawCategory.slug }/`,
  });
};

beforeAll(() => {
  rawCategories = CategoryFactory.buildList(3);
  state = {
    categories: rawCategories,
  };
});

describe('getCategories', () => {
  it('should return categories', () => {
    const categories = getCategories(state);

    expect(categories).toHaveLength(3);
    expect(categories).toEqual(state.categories);
  });
});

describe('categoriesSelector', () => {
  it('should return transformed categories', () => {
    const categories = categoriesSelector(state);

    expect(categories).toHaveLength(3);
    each(categories, (category, index) => assertCategory(category, rawCategories[index]));
  });
});

describe('getCategories', () => {
  it('should return whether categories is fetched or not', () => {
    expect(fetchedCategoriesSelector(state)).toBe(true);
    expect(fetchedCategoriesSelector({ categories: [] })).toBe(false);
  });
});

describe('categorySelector', () => {
  it('should return category based on slug', () => {
    each(rawCategories, rawCategory => {
      const props = {
        match: {
          params: {
            slug: rawCategory.slug,
          },
        },
      };
      assertCategory(categorySelector(state, props), rawCategory);
    });
  });
});
