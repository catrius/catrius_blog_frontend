import React, { Component } from 'react';
import { bool, func, string, shape } from 'prop-types';
import { Link } from 'react-router-dom';
import { isEqual } from 'lodash';
import ReactMarkdown from 'react-markdown';
import cx from 'classnames';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import styles from './post-page.module.sass';

import { POST_SHAPE } from 'utils/constants';
import MetaPage from 'components/common/meta-page';


export default class PostPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      lightboxOpen: false,
    };
  }

  componentDidMount() {
    const { fetchPost, slug, fetchedPost } = this.props;
    window.scroll(0, 0);

    !fetchedPost && fetchPost(slug);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { fetchPost, slug, fetchedPost } = this.props;
    if (!isEqual(slug, prevProps.slug)) {
      fetchedPost && fetchPost(slug);
    }
  }

  triggerLightBox = (state) => this.setState({ lightboxOpen: state });

  render() {
    const { post } = this.props;
    const { lightboxOpen } = this.state;
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
              <div className={ styles['thumbnail'] } onClick={ () => this.triggerLightBox(true) }>
                <img className={ styles['thumbnail-image'] } src={ thumbnail } alt=''/>
                <div className={ styles['caption'] }>{ caption }</div>
              </div>
            ) : null
          }
          {
            lightboxOpen ? (
              <Lightbox
                mainSrc={ thumbnail }
                onCloseRequest={ () => this.triggerLightBox(false) }
                enableZoom={ false }
                animationDuration={ 0 }
              />
            ) : null
          }
          <ReactMarkdown className={ styles['content'] } source={ content }/>
        </div>
      </MetaPage>
    );
  }
}

PostPage.propTypes = {
  slug: string,
  fetchPost: func,
  fetchedPost: bool,
  post: shape(POST_SHAPE),
};
