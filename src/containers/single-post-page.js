import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchSinglePost } from 'actions/fetch-data';
import { getPK, postSelector } from 'selectors/single-post-page';
import SinglePostPage from 'components/single-post-page';


const mapStateToProps = (state, ownProps) => ({
  post: postSelector(state),
  pk: getPK(state, ownProps),
});

const mapDispatchToProps = dispatch => ({
  fetchSinglePost: pk => dispatch(fetchSinglePost(pk)()),
});

const SinglePostPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SinglePostPage));

export default SinglePostPageContainer;
