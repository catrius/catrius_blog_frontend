import React, { useContext } from 'react';
import { func, number, object } from 'prop-types';
import ReactPaginate from 'react-paginate';
import cx from 'classnames';

import styles from './paginator.module.sass';

import { DeviceContext } from 'contexts';
import { RESPONSIVE_CLASS_NAMES } from 'utils/constants';


export default function Paginator(props) {
  const { pageCount, page, history } = props;
  const device = useContext(DeviceContext);
  const handlePageChange = data => history.push(`?page=${ data.selected + 1 }`);

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
        hrefBuilder={ pageIndex => `?page=${ pageIndex }` }
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
