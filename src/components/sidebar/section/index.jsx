import React from 'react';
import cx from 'classnames';
import { string, element } from 'prop-types';

import styles from './section.module.sass';


function Section(props) {
  const { title, children, className } = props;
  return (
    <div className={ cx(styles['section'], className ) }>
      { title && <div className={ styles['title'] }>{ title }</div> }
      { children }
    </div>
  );
}

Section.propTypes = {
  title: string,
  children: element,
  className: string,
};

export default Section;
