import React from 'react';
import cx from 'classnames';
import { string } from 'prop-types';

import styles from './facebook.module.sass';

import { FACEBOOK_URL } from 'utils/constants';
import BaseIcon from 'components/common/icons/BaseIcon';


function Facebook(props) {
  const { className } = props;
  return (
    <BaseIcon className={ cx(styles['facebook'], className) } href={ FACEBOOK_URL }>
      <i className='fab fa-facebook-f'/>
    </BaseIcon>
  );
}

Facebook.propTypes = {
  className: string,
};

export default Facebook;
