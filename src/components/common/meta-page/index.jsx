import React, { Fragment } from 'react';
import { node, string } from 'prop-types';
import { Helmet } from 'react-helmet-async';
import DotLoader from 'react-spinners/DotLoader';
import cx from 'classnames';

import styles from './meta-page.module.sass';

import { buildTitle } from 'utils/web-meta';
import { FAIL, REQUEST, WEB_DESCRIPTION } from 'utils/constants';


export default function MetaPage(props) {
  const { children, fetchState, title, description } = props;

  const renderChildren = () => {
    if (fetchState === FAIL) {
      return (
        <h1 className={ styles['empty-page'] }>
          Nothing to see here <i className='far fa-dizzy' />
        </h1>
      );
    }
    if (fetchState === REQUEST) {
      return (
        <div className={ cx(styles['empty-page'], styles['center']) }>
          <DotLoader
            color={ 'black' }
            loading={ true }
          />
        </div>
      );
    } else {
      return children;
    }
  };

  return (
    <Fragment>
      <Helmet>
        <title>{ buildTitle(title) }</title>
        <meta name='description' content={ description }/>
      </Helmet>
      { renderChildren() }
    </Fragment>
  );
}

MetaPage.propTypes = {
  children: node,
  title: string,
  fetchState: string,
  description: string,
};

MetaPage.defaultProps = {
  title: '',
  description: WEB_DESCRIPTION,
};
