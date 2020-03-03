import React, { Component } from 'react';
import { map } from 'lodash';
import { arrayOf, bool, func, shape } from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './navbar.module.sass';

import { CATEGORY_SHAPE, MOBILE } from 'utils/constants';
import { DeviceTypeContext } from 'contexts';


export default class Navbar extends Component {
  componentDidMount() {
    const { fetchCategories, fetchedCategories } = this.props;
    !fetchedCategories && fetchCategories();
  }

  render() {
    const { categories } = this.props;
    const device = this.context;
    const textAlign = device === MOBILE ? 'center' : 'left';

    return (
      <div className={ styles['navbar'] }>
        <div className={ styles['categories'] } style={ { textAlign } }>
          {
            map(categories, category => (
              <Link to={ category.url } className={ styles['category'] } key={ category.pk }>
                { category.name }
              </Link>
            ))
          }
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  fetchCategories: func,
  fetchedCategories: bool,
  categories: arrayOf(shape(CATEGORY_SHAPE)),
};

Navbar.contextType = DeviceTypeContext;
