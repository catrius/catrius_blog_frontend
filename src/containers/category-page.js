import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPosts } from 'actions/fetch-data';
import CategoryPage from 'components/category-page';
import { postsSelector } from 'selectors/posts';
import { getPage, getPK } from 'selectors/router';


const mapStateToProps = (state, ownProps) => ({
  posts: postsSelector(state),
  pk: getPK(state, ownProps),
  page: getPage(state, ownProps),
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: params => dispatch(fetchPosts(params)()),
});

const CategoryPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryPage));

export default CategoryPageContainer;
