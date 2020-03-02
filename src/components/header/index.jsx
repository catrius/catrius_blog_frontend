import React from 'react';
import { Link } from 'react-router-dom';
import { arrayOf, bool, func, shape } from 'prop-types';

import styles from './header.module.sass';

import { CATEGORY_SHAPE } from 'utils/constants';
import Facebook from 'components/common/icons/facebook';
import Github from 'components/common/icons/github';


export default function Header() {
  return (
    <div className={ styles['header'] }>
      <div className={ styles['social-media'] }>
        <Facebook className={ styles['icon'] }/>
        <Github className={ styles['icon'] }/>
      </div>
      <Link to='/' className={ styles['logo'] }>Catri.us</Link>
      <div className={ styles['pages'] }>
        <Link to='#' className={ styles['page'] }>About</Link>
        <Link to='#' className={ styles['page'] }>Contact</Link>
      </div>
    </div>
  );
}

Header.propTypes = {
  fetchCategories: func,
  fetchedCategories: bool,
  categories: arrayOf(shape(CATEGORY_SHAPE)),
};
