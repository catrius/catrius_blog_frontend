import React, { useContext } from 'react';
import { func, number, object } from 'prop-types';
import ReactPaginate from 'react-paginate';
import cx from 'classnames';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './paginator-container.module.sass';

import { DeviceContext } from 'contexts';
import { RESPONSIVE_CLASS_NAMES } from 'utils/constants';
import { getPageCount } from 'selectors/paginator-selectors';
import { getPage } from 'selectors/router-selectors';


export function Paginator(props) {
  const { pageCount, page, history } = props;
  const device = useContext(DeviceContext);
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
        pageLinkClassName={ styles['paginator-container-link'] }
        previousLinkClassName={ styles['paginator-container-link'] }
        nextLinkClassName={ styles['paginator-container-link'] }
        breakLinkClassName={ styles['paginator-container-link'] }
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

const mapStateToProps = (state, ownProps) => ({
  pageCount: getPageCount(state),
  page: getPage(state, ownProps),
});

const mapDispatchToProps = {};

const PaginatorContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Paginator));

export default PaginatorContainer;
