import React, { Component } from 'react';
import { func, number, shape } from 'prop-types';
import { Link } from 'react-router-dom';
import { isNil } from 'lodash';

import styles from './post-page.module.sass';

import { POST_SHAPE } from 'utils/constants';


export default class PostPage extends Component {
  componentDidMount() {
    const { fetchPost, pk } = this.props;
    fetchPost(pk);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { fetchPost, pk } = this.props;
    if (!isNil(pk) && pk !== prevProps.pk) {
      fetchPost(pk);
    }
  }

  render() {
    const { post } = this.props;
    const { title, date, category, content } = post;
    return (
      <div className={ styles['post-page'] }>
        <h4 className={ styles['title'] }>{ title }</h4>
        <div className={ styles['meta'] }>
          <Link to={ category.url } className={ styles['category'] }>{ category.name }</Link>
          <span className={ styles['date'] }>{ date }</span>
        </div>
        <div className={ styles['content'] }>{ content }</div>
      </div>
    );
  }
}

PostPage.propTypes = {
  pk: number,
  fetchPost: func,
  post: shape(POST_SHAPE),
};
