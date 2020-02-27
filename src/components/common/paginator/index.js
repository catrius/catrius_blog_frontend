import React from 'react';
import { func, number, object } from 'prop-types';
import ReactPaginate from 'react-paginate';

import styles from './paginator.module.sass';


export default function Paginator(props) {
  const handlePageChange = data => {
    const { fetch, fetchParams } = props;
    fetch({ ...fetchParams, page: data.selected + 1 });
    window.scrollTo(0, 0);
  };

  const { pageCount } = props;

  return (
      <ReactPaginate
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
      />
    );
}

Paginator.propTypes = {
  pageCount: number,
  onClick: func,
  fetch: func,
  fetchParams: object,
};
