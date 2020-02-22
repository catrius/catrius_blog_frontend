import { connect } from 'react-redux';

import { fetchAllPosts } from 'actions/fetch-data';
import Homepage from 'components/homepage';
import { allPostsSelector, fetchedAllPostsSelector } from 'selectors/homepage';


const mapStateToProps = (state, ownProps) => ({
  allPosts: allPostsSelector(state),
  fetchedAllPosts: fetchedAllPostsSelector(state),
});

const mapDispatchToProps = {
  fetchAllPosts,
};

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(Homepage);

export default HomePageContainer;
