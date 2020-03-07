import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { arrayOf, bool, func, shape } from 'prop-types';

import styles from './header.module.sass';

import { CATEGORY_SHAPE, MOBILE } from 'utils/constants';
import Facebook from 'components/common/icons/facebook';
import Github from 'components/common/icons/github';
import { DeviceContext } from 'contexts';


export default function Header() {
  const device = useContext(DeviceContext);
  return (
    <div className={ styles['header'] }>
      {
        device !== MOBILE ? (
          <div className={ styles['social-media'] }>
            <Facebook className={ styles['icon'] }/>
            <Github className={ styles['icon'] }/>
          </div>
        ) : null
      }
      <Link to='/' className={ styles['logo'] }>Catri.us</Link>
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
