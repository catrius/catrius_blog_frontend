import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPosts } from 'actions/fetch-data-actions';
import SearchPage from 'components/search-page';
import { postsSelector } from 'selectors/posts-selectors';
import { getPage, getSearchQuery } from 'selectors/router-selectors';
import { getFetchState } from 'selectors/fetch-state-selectors';


const mapStateToProps = (state, ownProps) => ({
  posts: postsSelector(state),
  page: getPage(state, ownProps),
  searchQuery: getSearchQuery(state, ownProps),
  fetchState: getFetchState(state, ownProps).posts,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: params => dispatch(fetchPosts(params)()),
});

const SearchPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage));

export default SearchPageContainer;
