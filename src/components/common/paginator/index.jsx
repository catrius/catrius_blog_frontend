import React, { useContext } from 'react';
import { func, number, object } from 'prop-types';
import ReactPaginate from 'react-paginate';

import styles from './paginator.module.sass';

import { DeviceTypeContext } from 'contexts';
import { MOBILE } from 'utils/constants';


export default function Paginator(props) {
  const { pageCount, page, history } = props;
  const device = useContext(DeviceTypeContext);
  const style = device === MOBILE ? {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
  } : {};
  const handlePageChange = data => history.push(`?page=${data.selected + 1}`);

  return (
    <div
      className={ styles['paginator-wrapper'] }
      style={ style }
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
        hrefBuilder={ pageIndex => `?page=${pageIndex}` }
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
