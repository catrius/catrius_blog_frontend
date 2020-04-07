import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPosts } from 'actions/fetch-data-actions';
import Homepage from 'components/homepage';
import { postsSelector } from 'selectors/posts-selectors';
import { getPage } from 'selectors/router-selectors';
import { getFetchState } from 'selectors/fetch-state-selectors';


const mapStateToProps = (state, ownProps) => ({
  posts: postsSelector(state),
  page: getPage(state, ownProps),
  fetchState: getFetchState(state, ownProps).posts,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: params => dispatch(fetchPosts(params)()),
});

const HomepageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));

export default HomepageContainer;
