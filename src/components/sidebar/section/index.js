import React from 'react';
import PropTypes from 'prop-types';

import styles from './section.module.sass';


function Section(props) {
  const { title, children } = props;
  return (
    <div className={ styles['section'] }>
      { title && <div className={ styles['title'] }>{ title }</div> }
      { children }
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Section;
