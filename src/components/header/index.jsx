import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { arrayOf, bool, func, shape } from 'prop-types';

import styles from './header.module.sass';

import { CATEGORY_SHAPE, MOBILE, WEB_NAME } from 'utils/constants';
import FacebookIcon from 'components/common/icons/facebook-icon';
import GithubIcon from 'components/common/icons/github-icon';
import { DeviceContext } from 'contexts';


export default function Header() {
  const device = useContext(DeviceContext);
  return (
    <div className={ styles['header'] }>
      {
        device !== MOBILE ? (
          <div className={ styles['social-media'] }>
            <FacebookIcon className={ styles['icon'] }/>
            <GithubIcon className={ styles['icon'] }/>
          </div>
        ) : null
      }
      <Link to='/' className={ styles['logo'] }>{ WEB_NAME }</Link>
      {
        device !== MOBILE ? (
          <div className={ styles['pages'] }>
            <Link to='#' className={ styles['page'] }>About</Link>
            <Link to='#' className={ styles['page'] }>Contact</Link>
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
