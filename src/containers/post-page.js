import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPost } from 'actions/fetch-data';
import PostPage from 'components/post-page';
import { postSelector } from 'selectors/post';
import { getPK } from 'selectors/router';


const mapStateToProps = (state, ownProps) => ({
  post: postSelector(state),
  pk: getPK(state, ownProps),
});

const mapDispatchToProps = dispatch => ({
  fetchPost: pk => dispatch(fetchPost(pk)()),
});

const PostPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(PostPage));

export default PostPageContainer;
