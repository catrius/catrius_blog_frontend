import React from 'react';
import cx from 'classnames';
import { string, node } from 'prop-types';

import styles from './base-icon.module.sass';


function BaseIcon(props) {
  const { className, href } = props;
  return (
    <a className={ cx(styles['base'], className) } href={ href }>
      { props.children }
    </a>
  );
}

BaseIcon.propTypes = {
  className: string,
  href: string,
  children: node,
};

export default BaseIcon;
