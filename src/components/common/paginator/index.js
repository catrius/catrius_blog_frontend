import React, { Component } from 'react';
import { func, number } from 'prop-types';
import ReactPaginate from 'react-paginate';

import styles from './paginator.module.sass';


export default class Paginator extends Component {
  handlePageChange = data => {
    const { fetch } = this.props;
    fetch({ page: data.selected + 1 });
    window.scrollTo(0, 0);
  };

  render() {
    const { pageCount } = this.props;
    return (
      <ReactPaginate
        pageCount={ pageCount }
        onPageChange={ this.handlePageChange }
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
}

Paginator.propTypes = {
  pageCount: number,
  onClick: func,
  fetch: func,
};
