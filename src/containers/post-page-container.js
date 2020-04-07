import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPost } from 'actions/fetch-data-actions';
import PostPage from 'components/post-page';
import { getSlug } from 'selectors/router-selectors';
import { fetchedPostSelector, postSelector } from 'selectors/posts-selectors';
import { getFetchState } from 'selectors/fetch-state-selectors';


const mapStateToProps = (state, ownProps) => ({
  post: postSelector(state, ownProps),
  slug: getSlug(state, ownProps),
  fetchedPost: fetchedPostSelector(state, ownProps),
  fetchState: getFetchState(state, ownProps).post,
});

const mapDispatchToProps = dispatch => ({
  fetchPost: slug => dispatch(fetchPost(slug)()),
});

const PostPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(PostPage));

export default PostPageContainer;
