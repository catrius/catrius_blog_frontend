import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchCategory } from 'actions/fetch-data';
import CategoryPage from 'components/category-page';
import { categorySelector } from 'selectors/category-page';
import { getPK } from 'selectors/router';


const mapStateToProps = (state, ownProps) => ({
  category: categorySelector(state),
  pk: getPK(state, ownProps),
});

const mapDispatchToProps = dispatch => ({
  fetchCategory: pk => dispatch(fetchCategory(pk)()),
});

const CategoryPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryPage));

export default CategoryPageContainer;
