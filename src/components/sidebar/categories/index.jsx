import React from 'react';
import cx from 'classnames';

import styles from './categories.module.sass';

import Section from 'components/sidebar/section';


function Categories() {
  return (
    <Section title='Categories'>
      <ul className={ cx(styles['categories'], 'disable-list-style') }>
        <a href='/'>
          <li className={ styles['category'] }>
            <span>Fashion</span><span>59</span>
          </li>
        </a>
        <a href='/'>
          <li className={ styles['category'] }>
            <span>Travel</span><span>9</span>
          </li>
        </a>
      </ul>
    </Section>
  );
}

export default Categories;
