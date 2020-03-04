import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPost } from 'actions/fetch-data';
import PostPage from 'components/post-page';
import { getPK } from 'selectors/router';
import { fetchedPostSelector, postSelector } from 'selectors/posts';


const mapStateToProps = (state, ownProps) => ({
  post: postSelector(state, ownProps),
  pk: getPK(state, ownProps),
  fetchedPost: fetchedPostSelector(state, ownProps),
});

const mapDispatchToProps = dispatch => ({
  fetchPost: pk => dispatch(fetchPost(pk)()),
});

const PostPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(PostPage));

export default PostPageContainer;
