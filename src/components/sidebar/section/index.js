import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

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
  title: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string,
};

export default Section;
