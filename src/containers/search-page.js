import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPosts } from 'actions/fetch-data';
import SearchPage from 'components/search-page';
import { postsSelector } from 'selectors/posts';
import { getPage, getSearchQuery } from 'selectors/router';
import { getFetchState } from 'selectors/fetch-state';


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
