import React, { Component } from 'react';
import { map } from 'lodash';
import { arrayOf, bool, func, shape, number } from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import styles from './navbar.module.sass';

import { CATEGORY_SHAPE, RESPONSIVE_CLASS_NAMES } from 'utils/constants';
import { DeviceTypeContext } from 'contexts';


export default class Navbar extends Component {
  componentDidMount() {
    const { fetchCategories, fetchedCategories } = this.props;
    !fetchedCategories && fetchCategories();
  }

  render() {
    const { categories, pk } = this.props;
    const device = this.context;

    return (
      <div className={ styles['navbar'] }>
        <div className={ cx(styles['categories'], styles[RESPONSIVE_CLASS_NAMES[device]]) }>
          {
            map(categories, category => (
              <Link
                to={ category.url }
                className={ cx(styles['category'], { [styles['current']]: pk === category.pk }) }
                key={ category.pk }>
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
  pk: number,
  categories: arrayOf(shape(CATEGORY_SHAPE)),
};

Navbar.contextType = DeviceTypeContext;
