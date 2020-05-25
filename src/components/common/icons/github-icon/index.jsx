import React from 'react';
import cx from 'classnames';
import { string } from 'prop-types';

import styles from './github-icon.module.sass';

import { GITHUB_URL } from 'utils/constants';
import BaseIcon from 'components/common/icons/base-icon';


function GithubIcon(props) {
  const { className } = props;
  return (
    <BaseIcon className={ cx(styles['github'], className) } href={ GITHUB_URL }>
      <i className='fab fa-github-alt'/>
    </BaseIcon>
  );
}

GithubIcon.propTypes = {
  className: string,
};

export default GithubIcon;
