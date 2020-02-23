import React from 'react';
import cx from 'classnames';
import { map } from 'lodash';
import { arrayOf, number, shape, string } from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './categories.module.sass';

import Section from 'components/sidebar/section';


function Categories(props) {
  const { categories } = props;
  return (
    <Section title='Categories'>
      <ul className={ cx(styles['categories'], 'disable-list-style') }>
        {
          map(categories, category => (
            <Link to={ category.url } key={ category.pk }>
              <li className={ styles['category'] }>
                <span>{ category.name }</span><span>{ category.postCount }</span>
              </li>
            </Link>
          ))
        }
      </ul>
    </Section>
  );
}

Categories.propTypes = {
  categories: arrayOf(shape({
    pk: number,
    name: string,
    description: string,
    postCount: number,
    url: string,
  })),
};

export default Categories;
