import { each } from 'lodash';

import {
  categoriesSelector,
  categorySelector,
  fetchedCategoriesSelector,
  getCategories,
} from 'selectors/categories-selectors';
import CategoryFactory from 'factories/category-factory';
import { transformCategory } from 'selectors/transfomers';


let rawCategories;
let state;


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
    expect(categories).toEqual(rawCategories);
  });
});

describe('categoriesSelector', () => {
  it('should return transformed categories', () => {
    const categories = categoriesSelector(state);

    expect(categories).toHaveLength(3);
    each(categories, (category, index) => expect(category).toEqual(transformCategory(rawCategories[index])));
  });
});

describe('fetchedCategoriesSelector', () => {
  it('should return whether categories is fetched or not', () => {
    expect(fetchedCategoriesSelector(state)).toBe(true);
    expect(fetchedCategoriesSelector({ categories: [] })).toBe(false);
  });
});

describe('categorySelector', () => {
  it('should return category based on slug', () => {
    each(rawCategories, rawCategory => {
      expect(categorySelector(rawCategory.slug)(state, {})).toEqual(transformCategory(rawCategory));
    });
  });
});
