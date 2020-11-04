import React, { useContext, useEffect, useState } from 'react';
import { map } from 'lodash';
import { Link, useHistory, useLocation } from 'react-router-dom';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import styles from './navbar.module.sass';

import { MOBILE, RESPONSIVE_CLASS_NAMES, SEARCH_ROUTER } from 'utils/constants';
import { DeviceContext } from 'contexts';
import { categoriesSelector, fetchedCategoriesSelector } from 'selectors/categories-selectors';
import { getCategorySlug, getSearchQuery } from 'selectors/router-selectors';
import { fetchCategories } from 'actions/fetch-data-actions';


export default function NavBar() {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelector);
  const fetchedCategories = useSelector(fetchedCategoriesSelector);
  const slug = getCategorySlug(useLocation());
  const searchQuery = useSelector(getSearchQuery);
  const device = useContext(DeviceContext);
  const [searchText, setSearchText] = useState(searchQuery);
  const [searchShowing, setSearchShowing] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setSearchShowing(device !== MOBILE);
    !fetchedCategories && dispatch(fetchCategories());
  }, [device, fetchedCategories, dispatch]);

  useEffect(() => {
    setSearchText(searchQuery);
  }, [searchQuery]);

  const handleSearchChange = e => setSearchText(e.target.value);

  const handleSearchSubmit = e => {
    e.preventDefault();
    history.push(`${SEARCH_ROUTER}?q=${searchText}`);
  };

  const toggleSearch = () => setSearchShowing(!searchShowing);

  return (
    <div className={ styles['navbar'] }>
      <div className={ cx(styles['wrapper'], styles[RESPONSIVE_CLASS_NAMES[device]]) }>
      <div className={ cx(styles['categories'], { 'half': searchShowing }) }>
        {
          map(categories, category => (
            <Link
              to={ category.url }
              className={ cx(styles['category'], { [styles['current']]: slug === category.slug }) }
              key={ category.slug }>
              { category.name }
            </Link>
          ))
        }
          { device === MOBILE ? (
            <i
              className={ cx(styles['category'], 'fas',
                { 'fa-search': !searchShowing, 'fa-times': searchShowing },
              ) }
              onClick={ toggleSearch }
            />
          ) : null }
        </div>
        {
          searchShowing ? (
            <form className={ styles['search'] } onSubmit={ handleSearchSubmit }>
              <input
                className={ cx(styles['search-element'], styles['search-text']) }
                type='text'
                value={ searchText }
                onChange={ handleSearchChange }
                placeholder='Search'
              />
              <button
                className={ cx(styles['search-element'], styles['search-button']) }
                type='submit'
              >
                <i className='fas fa-search'/>
              </button>
            </form>
          ) : null
        }
      </div>
    </div>
  );
}
