import React, { Component } from 'react';
import { func, number, shape, string } from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './single-post-page.module.sass';


export default class SinglePostPage extends Component {
  componentDidMount() {
    const { fetchSinglePost, pk } = this.props;
    fetchSinglePost(pk);
  }

  render() {
    const { post } = this.props;
    return (
      <div className={ styles['single-post-page'] }>
        { post.toString() }
      </div>
    );
  }
}

SinglePostPage.propTypes = {
  pk: number,
  fetchSinglePost: func,
  post: shape({
    pk: number,
    title: string,
    date: string,
    excerpt: string,
    category: string,
  }),
};
