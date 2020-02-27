import { connect } from 'react-redux';

import { fetchPosts } from 'actions/fetch-data';
import Homepage from 'components/homepage';
import { postsSelector } from 'selectors/posts';


const mapStateToProps = (state, ownProps) => ({
  posts: postsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: params => dispatch(fetchPosts(params)()),
});

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(Homepage);

export default HomePageContainer;
