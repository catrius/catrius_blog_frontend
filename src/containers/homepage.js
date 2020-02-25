import { connect } from 'react-redux';

import { fetchPosts } from 'actions/fetch-data';
import Homepage from 'components/homepage';
import { postsSelector, fetchedPostsSelector } from 'selectors/homepage';


const mapStateToProps = (state, ownProps) => ({
  posts: postsSelector(state),
  fetchedPosts: fetchedPostsSelector(state),
});

const mapDispatchToProps = {
  fetchPosts,
};

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(Homepage);

export default HomePageContainer;
