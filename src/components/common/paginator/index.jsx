import React, { useContext } from 'react';
import { func, number, object } from 'prop-types';
import ReactPaginate from 'react-paginate';
import cx from 'classnames';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './paginator.module.sass';

import { DeviceContext } from 'contexts';
import { RESPONSIVE_CLASS_NAMES } from 'utils/constants';
import { getPageCount } from 'selectors/paginator-selectors';
import { getPage } from 'selectors/router-selectors';


export default function Paginator() {
  const device = useContext(DeviceContext);
  const location = useLocation();
  const history = useHistory();
  const page = getPage(location);
  const pageCount = useSelector(getPageCount);

  const handlePageChange = data => history.push(`?page=${ data.selected + 1 }`);
  const hrefBuilder = pageIndex => `?page=${ pageIndex }`;

  return (
    <div
      className={ cx(styles['paginator-wrapper'], styles[RESPONSIVE_CLASS_NAMES[device]]) }
    >
      <ReactPaginate
        forcePage={ page - 1 }
        pageCount={ pageCount }
        onPageChange={ handlePageChange }
        previousLabel='«'
        nextLabel='»'
        containerClassName={ styles['paginator'] }
        pageClassName={ styles['page'] }
        previousClassName={ styles['previous'] }
        nextClassName={ styles['next'] }
        breakClassName={ styles['break'] }
        disabledClassName={ styles['disabled'] }
        activeClassName={ styles['active'] }
        pageLinkClassName={ styles['paginator-link'] }
        previousLinkClassName={ styles['paginator-link'] }
        nextLinkClassName={ styles['paginator-link'] }
        breakLinkClassName={ styles['paginator-link'] }
        hrefBuilder={ hrefBuilder }
      />
    </div>
  );
}

Paginator.propTypes = {
  pageCount: number,
  page: number,
  onClick: func,
  fetch: func,
  fetchParams: object,
  history: object,
};
