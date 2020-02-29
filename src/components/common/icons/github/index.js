import React from 'react';
import cx from 'classnames';
import { string } from 'prop-types';

import styles from './github.module.sass';

import { GITHUB_URL } from 'utils/constants';
import BaseIcon from 'components/common/icons/BaseIcon';


function Github(props) {
  const { className } = props;
  return (
    <BaseIcon className={ cx(styles['github'], className) } href={ GITHUB_URL }>
      <i className='fab fa-github-alt'/>
    </BaseIcon>
  );
}

Github.propTypes = {
  className: string,
};

export default Github;
