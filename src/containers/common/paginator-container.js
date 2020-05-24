import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getPageCount } from 'selectors/paginator-selectors';
import Paginator from 'components/common/paginator';
import { getPage } from 'selectors/router-selectors';


const mapStateToProps = (state, ownProps) => ({
  pageCount: getPageCount(state),
  page: getPage(state, ownProps),
});

const mapDispatchToProps = {};

const PaginatorContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Paginator));

export default PaginatorContainer;
