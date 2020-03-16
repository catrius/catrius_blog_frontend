import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPosts } from 'actions/fetch-data';
import CategoryPage from 'components/category-page';
import { postsSelector } from 'selectors/posts';
import { getPage, getSlug } from 'selectors/router';
import { categorySelector } from 'selectors/categories';
import { getFetchState } from 'selectors/fetch-state';


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
