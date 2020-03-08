import React, { Fragment } from 'react';
import { node, string } from 'prop-types';
import { Helmet } from 'react-helmet-async';

import { buildTitle } from 'utils/web-meta';
import { WEB_DESCRIPTION } from 'utils/constants';


export default function MetaPage(props) {
  const { children, title, description } = props;
  return (
    <Fragment>
      <Helmet>
        <title>{ buildTitle(title) }</title>
        <meta name='description' content={ description }/>
      </Helmet>
      { children }
    </Fragment>
  );
}

MetaPage.propTypes = {
  children: node,
  title: string,
  description: string,
};

MetaPage.defaultProps = {
  title: '',
  description: WEB_DESCRIPTION,
};
