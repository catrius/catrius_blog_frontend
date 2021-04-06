import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { arrayOf, bool, func, shape } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import styles from './header.module.sass';

import { CATEGORY_SHAPE, MOBILE, WEB_NAME } from 'utils/constants';
import FacebookIcon from 'components/common/icons/facebook-icon';
import GithubIcon from 'components/common/icons/github-icon';
import { DeviceContext } from 'contexts';
import { fetchPages } from 'actions/fetch-data-actions.js';
import { pagesSelector } from 'selectors/pages-selectors.js';


export default function Header() {
  const device = useContext(DeviceContext);
  const dispatch = useDispatch();
  const pages = useSelector(pagesSelector);

  useEffect(() => {
    dispatch(fetchPages());
  }, [dispatch]);

  return (
    <div className={ styles['header'] }>
      {
        device !== MOBILE ? (
          <div className={ styles['social-media'] }>
            <FacebookIcon className={ styles['icon'] } />
            <GithubIcon className={ styles['icon'] } />
          </div>
        ) : null
      }
      <Link to='/' className={ styles['logo'] }>{ WEB_NAME }</Link>
      {
        device !== MOBILE ? (
          <div className={ styles['pages'] }>
            { pages.map(page => (
              <Link key={ page.slug } to={ page.url } className={ styles['page'] }>{ page.title }</Link>
            )) }
          </div>
        ) : null
      }
    </div>
  );
}

Header.propTypes = {
  fetchCategories: func,
  fetchedCategories: bool,
  categories: arrayOf(shape(CATEGORY_SHAPE)),
};
