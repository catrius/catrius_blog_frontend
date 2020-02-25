import { connect } from 'react-redux';

import { getPageCount } from 'selectors/paginator';
import Paginator from 'components/common/paginator';


const mapStateToProps = (state, ownProps) => ({
  pageCount: getPageCount(state),
});

const mapDispatchToProps = {};

const PaginatorContainer = connect(mapStateToProps, mapDispatchToProps)(Paginator);

export default PaginatorContainer;
