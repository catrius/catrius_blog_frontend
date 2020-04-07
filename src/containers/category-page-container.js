import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPosts } from 'actions/fetch-data-actions';
import CategoryPage from 'components/category-page';
import { postsSelector } from 'selectors/posts-selectors';
import { getPage, getSlug } from 'selectors/router-selectors';
import { categorySelector } from 'selectors/categories-selectors';
import { getFetchState } from 'selectors/fetch-state-selectors';


const mapStateToProps = (state, ownProps) => ({
  posts: postsSelector(state),
  slug: getSlug(state, ownProps),
  page: getPage(state, ownProps),
  category: categorySelector(state, ownProps),
  fetchState: getFetchState(state, ownProps).posts,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: params => dispatch(fetchPosts(params)()),
});

const CategoryPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryPage));

export default CategoryPageContainer;
