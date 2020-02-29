import React, { Component } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { arrayOf, bool, func, shape } from 'prop-types';

import styles from './header.module.sass';
import Navbar from './navbar';

import { CATEGORY_SHAPE, FACEBOOK_URL, GITHUB_URL } from 'utils/constants';


export default class Header extends Component {
  componentDidMount() {
    const { fetchCategories, fetchedCategories } = this.props;
    !fetchedCategories && fetchCategories();
  }

  render() {
    const { categories } = this.props;
    console.warn(categories)

    return (
      <div className={ styles['header'] }>
        <div className={ styles['topbar'] }>
          <div className={ styles['social-media'] }>
            <a className={ styles['facebook'] } href={ FACEBOOK_URL }>
              <i className={ cx('fab fa-facebook', styles['icon']) }/>
            </a>
            <a className={ styles['github'] } href={ GITHUB_URL }>
              <i className={ cx('fab fa-github', styles['icon']) }/>
            </a>
          </div>
          <Link to='/' className={ styles['logo'] }>Catri.us</Link>
          <div className={ styles['pages'] }>
            <Link to='#' className={ styles['page'] }>About</Link>
            <Link to='#' className={ styles['page'] }>Contact</Link>
          </div>
        </div>
        <Navbar categories={ categories }/>
      </div>
    );
  }
}

Header.propTypes = {
  fetchCategories: func,
  fetchedCategories: bool,
  categories: arrayOf(shape(CATEGORY_SHAPE)),
};
