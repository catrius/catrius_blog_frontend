import React from 'react';
import { map } from 'lodash';
import { arrayOf, number, shape, string } from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './navbar.module.sass';


function Navbar(props) {
  const { categories } = props;
  return (
    <div className={ styles['navbar'] }>
      <div className={ styles['categories'] }>
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

Navbar.propTypes = {
  categories: arrayOf(shape({
    pk: number,
    name: string,
    description: string,
    postCount: number,
    url: string,
  })),
};

export default Navbar;
