import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { arrayOf, bool, func, shape } from 'prop-types';

import styles from './header.module.sass';
import Navbar from './navbar';

import { CATEGORY_SHAPE } from 'utils/constants';
import Facebook from 'components/common/icons/facebook';
import Github from 'components/common/icons/github';


export default class Header extends Component {
  componentDidMount() {
    const { fetchCategories, fetchedCategories } = this.props;
    !fetchedCategories && fetchCategories();
  }

  render() {
    const { categories } = this.props;

    return (
      <div className={ styles['header'] }>
        <div className={ styles['topbar'] }>
          <div className={ styles['social-media'] }>
            <Facebook className={ styles['icon'] } />
            <Github className={ styles['icon'] } />
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
