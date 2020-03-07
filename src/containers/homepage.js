import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPosts } from 'actions/fetch-data';
import Homepage from 'components/homepage';
import { postsSelector } from 'selectors/posts';
import { getPage } from 'selectors/router';


const mapStateToProps = (state, ownProps) => ({
  posts: postsSelector(state),
  page: getPage(state, ownProps),
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: params => dispatch(fetchPosts(params)()),
});

const HomepageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));

export default HomepageContainer;
