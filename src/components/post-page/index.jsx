import React, { Component } from 'react';
import { bool, func, number, shape } from 'prop-types';
import { Link } from 'react-router-dom';
import { isNil } from 'lodash';
import ReactMarkdown from 'react-markdown';

import styles from './post-page.module.sass';

import { POST_SHAPE } from 'utils/constants';
import MetaPage from 'components/common/meta-page';
import cx from 'classnames';


export default class PostPage extends Component {
  componentDidMount() {
    const { fetchPost, pk, fetchedPost } = this.props;
    window.scroll(0, 0);

    !fetchedPost && fetchPost(pk);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { fetchPost, pk, fetchedPost } = this.props;
    if (!isNil(pk) && pk !== prevProps.pk) {
      fetchedPost && fetchPost(pk);
    }
  }

  render() {
    const { post } = this.props;
    const { title, date, category, content, excerpt, thumbnail, caption, imageShowing } = post;
    return (
      <MetaPage title={ title } description={ excerpt }>
        <div className={ styles['post-page'] }>
          <h4 className={ styles['title'] }>{ title }</h4>
          <div className={ styles['meta'] }>
            <Link to={ category.url } className={ styles['category'] }>
              <i className={ cx('far fa-folder', styles['icon']) }/>{ category.name }
            </Link>
            <div className={ styles['date'] }>
              <i className={ cx('far fa-calendar-alt', styles['icon']) }/>{ date }
            </div>
          </div>
          {
            imageShowing ? (
              <div className={ styles['thumbnail'] }>
                <img className={ styles['thumbnail-image'] } src={ thumbnail } alt=''/>
                <div className={ styles['caption'] }>{ caption }</div>
              </div>
            ) : null
          }
          <ReactMarkdown className={ styles['content'] } source={ content }/>
        </div>
      </MetaPage>
    );
  }
}

PostPage.propTypes = {
  pk: number,
  fetchPost: func,
  fetchedPost: bool,
  post: shape(POST_SHAPE),
};
