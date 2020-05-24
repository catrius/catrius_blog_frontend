import { successfully } from 'utils/axios-suffixes';
import CategoryFactory from 'factories/category-factory';
import categories from 'reducers/categories-reducers';
import { FETCH_CATEGORIES } from 'utils/constants';


describe('categories', () => {
  it('should handle successfully(FETCH_CATEGORIES)', () => {
    const rawCategories = CategoryFactory.buildList(3);
    const action = {
      type: successfully(FETCH_CATEGORIES),
      payload: {
        data: {
          results: rawCategories,
        },
      },
    };
    expect(categories({}, action)).toEqual(rawCategories);
  });
});
